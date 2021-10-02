const mongoose=require('mongoose');
const joi=require('joi');


const meetingschema=mongoose.Schema({

    URL: {
        type: String,
        required: true,
    },
    class:{
        type:Number,
        required: true
    },
    startTime:{
        type:Number,
        required:true,
    },
    TeacherName:{
        type:String,
    },
    Subject:{
        type:String,
    },
});
const meet=mongoose.model('meet',meetingschema);

function validatemeet(meeting){
    console.log("validating");
    const schema=joi.object({

        class:joi.number().required().max(12).min(1),
        startTime:joi.number().min(0).max(2400),
       URL:joi.string().required(),
    })

    return schema.validate(meeting);
}

exports.meet=meet;
exports.validatemeet=validatemeet;

