export const Report = `
import * as vtecxapi from "vtecxapi";

const type = vtecxapi.getQueryString("type");

export const SELECT_ALL =
  "WITH sub_query as ( " +
  "SELECT everything.key, name, japanese_name, email, gender, company_name, job_title, age, country, yoga, description FROM photon_business_test.user AS everything " +
  "RIGHT JOIN " +
  "(SELECT key, MAX(updated) as updated FROM photon_business_test.user GROUP BY key) AS recent " +
  "ON everything.key = recent.key AND everything.updated = recent.updated " +
  "WHERE everything.deleted = FALSE" +
  ") ";

let yoga_gender =
  SELECT_ALL +
  "SELECT gender, CAST(COUNT(case WHEN yoga='true' then 1 end) AS STRING) AS yoga_yes, " +
  "CAST(COUNT(case WHEN yoga='false' then 1 end) AS STRING) AS yoga_no, " +
  "CAST(COUNT(*) AS STRING) as total  FROM sub_query GROUP BY gender ";

let yoga_country =
  SELECT_ALL +
  "SELECT yoga, CAST(COUNT(CASE WHEN country='United States' THEN 1 END) AS STRING) as united_states, " +
  "CAST(COUNT(CASE WHEN country='Bangladesh' THEN 1 END) AS STRING) as bangladesh, " +
  "CAST(COUNT( CASE WHEN COUNTRY='Japan' THEN 1 END) AS STRING) as japan FROM sub_query GROUP BY yoga";

let yoga_age =
  SELECT_ALL +
  "SELECT yoga, " +
  "CAST(COUNT(CASE WHEN CAST(age as INT64) >= 5 and CAST(age as INT64) <= 20 THEN 1 END) AS STRING) as five_twenty," +
  "CAST(COUNT(CASE WHEN CAST(age as INT64) >= 21 and CAST(age as INT64) <= 30 THEN 1 END) AS STRING) as twenty_thirty, " +
  "CAST(COUNT(CASE WHEN CAST(age as INT64) >= 31 and CAST(age as INT64) <= 40 THEN 1 END) AS STRING) as thirty_forty," +
  "CAST(COUNT(CASE WHEN CAST(age as INT64) >= 41 and CAST(age as INT64) <= 50 THEN 1 END) AS STRING) as fourty_fifty," +
  "CAST(COUNT(CASE WHEN CAST(age as INT64) >= 51 and CAST(age as INT64) <= 60 THEN 1 END) AS STRING) as fifty_sixty, " +
  "FROM sub_query GROUP BY yoga HAVING yoga = 'true'";

let country_age =
  SELECT_ALL +
  "SELECT country, " +
  "CAST(COUNT(CASE WHEN (CAST(age as INT64) >= 5 AND CAST(age as INT64) <= 20) THEN 1 END) AS STRING) as five_twenty," +
  "CAST(COUNT(CASE WHEN (CAST(age as INT64) >= 21 AND CAST(age as INT64) <= 30) THEN 1 END) AS STRING) as twenty_thirty," +
  "CAST(COUNT(CASE WHEN (CAST(age as INT64) >= 31 AND CAST(age as INT64) <= 40) THEN 1 END) AS STRING) as thirty_forty," +
  "CAST(COUNT(CASE WHEN (CAST(age as INT64) >= 41 AND CAST(age as INT64) <= 50) THEN 1 END) AS STRING) as fourty_fifty," +
  "CAST(COUNT(CASE WHEN (CAST(age as INT64) >= 51 AND CAST(age as INT64) <= 60) THEN 1 END) AS STRING) as fifty_sixty, " +
  "FROM sub_query GROUP BY country";

let country_gender =
  SELECT_ALL +
  "SELECT country, " +
  "CAST(COUNT(CASE WHEN gender = 'Male' THEN 1 END) AS STRING) as male," +
  "CAST(COUNT(CASE WHEN gender = 'Female' THEN 1 END) AS STRING) as female," +
  "CAST(COUNT(CASE WHEN gender = 'Other' THEN 1 END) AS STRING) as other " +
  "FROM sub_query GROUP BY country";

const reports: any = {
  yoga_gender,
  yoga_country,
  yoga_age,
  country_age,
  country_gender
};

if (type) {
  const result: VtecxApp.Entry[] = vtecxapi.getBQ(reports[type]);
  vtecxapi.log("GET USER REPORT ::::", JSON.stringify(result));
  const modifyResult = result.map(perResult => {
    return {
      result: {
        ...perResult
      }
    };
  });

  vtecxapi.doResponse(modifyResult, 200);
} else {
  vtecxapi.sendError(400);
}
`;