const sourceObject = {
    projectDir:"D:/personalProjects/Generated Code",
    models:[
        {
            name:"User",
            attributes:[	
                           {
                            name:"id",
                            props:{
                                type:"DataTypes.UUID",
                                allowNull: false,
                                primaryKey: true,
                                defaultValue: "DataTypes.UUIDV4",
                                }
                            },
        {name:"email",props: {
            type: "DataTypes.STRING",
            unique: true,
            allowNull: false,
        }},
        {name:"password",props: {
            type: "DataTypes.STRING",
            allowNull: true,
        }},
        {name:'firstName', props: { type: "DataTypes.STRING", allowNull: true }},
        {name:"lastName",props: { type: "DataTypes.STRING", allowNull: true }},
        {name:"avatar",props: { type: "DataTypes.STRING", allowNull: true }},]
    }
    ]
}
module.exports = sourceObject;