export = VtecxApp
export as namespace VtecxApp

declare namespace VtecxApp {
	interface Request {
		feed: Feed
	}
	interface Feed {
		entry: Entry[]
	}
	interface Entry {
		id?: string,
		title?: string,
		subtitle?: string,
		rights?: string,
		summary?: string,
		content?: Content[],
		link?: Link[],
		contributor?: Contributor[],
		user?:User,
		company_name?:string
	}
	interface Content {
		______text: string
	}
	interface Link {
		___href: string,
		___rel: string
	}
	interface Contributor {
		uri?: string,
		email?: string
	}
	interface User {
		name?:string,
		japanese_name?:string,
		email?:string,
		gender?:string,
		company_name?:string,
		job_title?:string,
		age?:string,
		country?:string,
		yoga?:string
	}
}