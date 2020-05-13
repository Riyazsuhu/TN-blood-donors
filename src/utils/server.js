const { Client } = require('pg')
const connectionString = 'postgressql://postgres:Aashiq@1310@localhost:5432/blood donars'

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
        console.log('failed to connect ${e}')
    }
}
async function listDonars(){
    try {
        const result = await client.query("select * from donars")
        return result.rows
    } catch (e) {
        return [];
    }
}
async function createDonar(name, mob_num, bld_grp, taluk){
    try {
        await client.query("INSERT INTO donars (name, mob_num, bld_grp, taluk) VALUES ($1, $2, $3, $4)",[name, mob_num, bld_grp, taluk]);
        return true
    } catch (e) {
        return false
    }
} 
async function searchDonars(bld_grp, taluk){
    try {
        const result = await client.query("select * from donars where bld_grp=($1) and taluk=($2)",[bld_grp, taluk])
        return result.rows
    } catch (e) {
        return [];
    }
}