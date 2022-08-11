function woodCal( chir,table,khat) {
    const chairWood = 5
    const tableWood = 12
    const khatWood = 22

    const chairkath = chir * chairWood
    const tablekhat = table * tableWood
    const khatkath = khat * khatWood

    return chairkath+tablekhat+khatkath
}

console.log(woodCal(34,55,677))