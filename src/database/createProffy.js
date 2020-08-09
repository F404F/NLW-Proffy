module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    //inserting data on proffy table
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    
    const proffy_id = insertedProffy.lastID

    //inserting data on classes table
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );  
    `)
    
    const class_id = insertedClass.lastID
    
    //inserting data on class_schedule table
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );  
        `)
    })
    
    // here will run all the db.runs() from class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}