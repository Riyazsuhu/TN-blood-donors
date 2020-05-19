const { Client } = require('pg')
//const connectionString = 'postgres://eqsewrxknjnjup:3bc0811484fe88b03797d5f845160ed663f503792c6c52298d12579da399fb2f@ec2-3-231-16-122.compute-1.amazonaws.com:5432/d5sr5fpoj7mub'
const connectionString = 'postgressql://postgres:alhamdulillah@localhost:5432/blood donors'
// const connectionString = 'postgressql://postgres1:Aashiq@1310@localhost:5432/blood donars'
const client = new Client({ connectionString: connectionString}) 
async function connect(){
    try{
        await client.connect();
        console.log('connected')
    }
    catch(e) {
        console.log('failed to connect', e)
    }
}
connect()
async function createDonar(name, mob_num, bld_grp, taluk,town){
    const result=await client.query("select * from donors where mob_num=($1)",[mob_num])
    try{
        if(result.rows.length===0){
            await client.query("INSERT INTO donors (name, mob_num, bld_grp, taluk, town) VALUES ($1, $2, $3, $4, $5)",[name, mob_num, bld_grp, taluk, town]);
            return {success:true}
        }else{
            return {success:false}
        }
    }catch(e){
        return {error:'something went wrong'}
    }
} 
async function searchDonars(bld_grp, taluk){
    try {
        const result = await client.query("select * from donors where bld_grp=($1) and taluk=($2)",[bld_grp, taluk])
        return result.rows
    } catch (e) {
        return [];
    }
}

module.exports = { createDonar, searchDonars}