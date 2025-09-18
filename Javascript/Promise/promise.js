


function getid1(id)
{
    return new Promise((ressolve,err)=> {
        setTimeout(() => {
        if(id >= 1) ressolve(id);
        else
        err("rror occured");
    }, 3000);
    })
}

let a = 1;

console.log(`facting id ${a}...`);

getid1(a).then((res) => {
    console.log("facting id 2 ...");
    return getid1(res+1);
}).then((res) => {
    console.log("facting id 3 ...");
    return getid1(res+1);
}
).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("all id fetched");
});




async function getid(id)
{
    try {
        console.log("facting id 1 ...");
        let res = await getid1(id);
        console.log("facting id 2 ...");
        res = await getid1(res+1);
        console.log("facting id 3 ...");
        res = await getid1(res+1);
    } catch(err) {
        console.log(err);
    } finally {
        console.log("all id fetched");
    }
}

getid(0);


const hasmeeting = false;

async function retrurnmeetingShedule(){
        const meeting = new Promise((resolve, reject) => {
        
        if (!hasmeeting) {
            const meetingdetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM",
            };
            resolve(meetingdetails);
        } else {
            reject(new Error("Meeting already scheduled"));
        }
    }); 

    return meeting;
}
async function myMeeting(){
    const meetingdetails = await retrurnmeetingShedule(); 
    console.log(meetingdetails.time);
}


myMeeting();