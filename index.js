const commando = require('discord.js-commando')
const bot = require('discord.js')
const client = new commando.Client({commandprefix:"jit!"})
client.login("NjU4ODEzNTk5MTM2ODc0NTI2.Xg1HtA.kUHF4B-jijmjoGi2tEERPpqIfRI");
function doStuff() {
    var guild=client.guilds.get('658736334835548161')
    var role = guild.roles.get('658797801559425045')
    if(role.members.size!=0){
        var array=role.members
        var prom = new Promise((resolve, reject)=>{
            var index = 0
            array.forEach(element => {
                //console.log(element)
                element.setRoles(['658811176431648779'])
                index+=1;
                if(index>=2) resolve();
            })
        })
        prom.then(()=>{
            console.log("time set")
            setTimeout(doStuff,60000)
        }).catch(console.error) ;
    }else{
        role=guild.roles.get('658811176431648779')
        var array=role.members
        var prom = new Promise((resolve, reject)=>{
            var index = 0
            array.forEach(element => {
                //console.log(element)
                element.setRoles(['658797801559425045'])
                index+=1;
                if(index>=2) resolve();
            })
        })
        prom.then(()=>{
            console.log("time set")
            setTimeout(doStuff,60000)
        }).catch(console.error) ;
    }
}
client.on("ready",()=>{
    console.log("i'm ready and willing")
    doStuff();
})

