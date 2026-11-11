export function formatDate(value:string,options?:Intl.DateTimeFormatOptions):string{
const date=new Date(value)
if(Number.isNaN(date.getTime()))return value
return new Intl.DateTimeFormat('fr-FR',{day:'numeric',month:'long',year:'numeric',...options}).format(date)
}
