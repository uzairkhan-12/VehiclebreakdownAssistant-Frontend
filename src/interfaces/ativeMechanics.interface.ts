export interface activeMechanicInterface{
    contactNumber:string,
    description:string,
    email:string,
    experience:string,
    mechanicTypeName:string,
    name:string,
    pic:string,
    workshopAddress:string,
    workshopClosingTime:string,
    workshopName:string,
    workshopOpeningTime:string,
    city:string,
    skills:[{
        _id:string,
        skill:string
    }]
}