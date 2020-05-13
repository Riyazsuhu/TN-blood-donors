const { Client } = require('pg')
const connectionString = 'postgres://eqsewrxknjnjup:3bc0811484fe88b03797d5f845160ed663f503792c6c52298d12579da399fb2f@ec2-3-231-16-122.compute-1.amazonaws.com:5432/d5sr5fpoj7mub'
const client = new Client({ connectionString: connectionString})
Start()
async function Start(){
    await connect();
    const listDonar = await listDonars();
    console.log(listDonar)

    const newDonar = await createDonar()
    console.log('New donar creation is', newDonar)

    const availDonars = await searchDonars("O+", "Anthiyur")
    console.log(availDonars)
}

async function connect(){
    try{
        await client.connect();
        console.log('connected')
    }
    catch(e) {
        console.log('failed to connect', e)
    }
}
async function listDonars(){
    try {
        const result = await client.query("select * from donors")
        return result.rows
    } catch (e) {
        return [];
    }
}
async function createDonar(name, mob_num, bld_grp, taluk){
    try {
        await client.query("INSERT INTO donors (name, mob_num, bld_grp, taluk) VALUES ($1, $2, $3, $4)",[name, mob_num, bld_grp, taluk]);
        return true
    } catch (e) {
        return false
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