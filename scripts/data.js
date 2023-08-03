/*
 * Exports object arrays containing guides and safety tips content
 */

//Possible muscle group attributes to give to guides
const muscles = {
    upperBody: {
        upperBack: "Upper Back",
        biceps: "Biceps",
        core: "Core",
        forearms: "Forearms",
        triceps: "Triceps",
        shoulders: "Shoulders",
        chest: "Chest",
    },
    lowerBody: {
        hamstrings: "Hamstrings",
        quadriceps: "Quadriceps",
        hipFlexors: "Hip Flexors",
        lowerBack: "Lower Back",
        calves: "Calves",
        glutes: "Glutes",
    }
};

//Exported array of objects containing general safety tips content
export const generalSafetyTips = [
    {
        title: "Breathing Control",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    },
    {
        title: "Spotting",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    },
    {
        title: "Grip",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    },
    {
        title: "Personal Trainers",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    },
    {
        title: "Warming Up",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    },
    {
        title: "Lifting Alone",
        paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus ipsum et vestibulum gravida. Sed hendrerit bibendum lectus, eu euismod nisl volutpat eu. Aliquam eget iaculis elit, et porta tellus. Maecenas a eleifend odio. Donec pretium interdum ipsum, ut dapibus nulla suscipit dictum.",
            "Vestibulum sed metus id dui commodo dictum. Vestibulum in orci quis neque venenatis aliquam vitae eget ex. Curabitur auctor porttitor consequat. Maecenas odio quam, tristique a tincidunt non, lobortis nec ligula. Curabitur pretium ullamcorper aliquam. Nulla facilisi."]
    }
];

//Exported array of objects containing exercise guides
export const guides = [
    {
        name: "Barbell Bench Press",
        visualSrc: "images/guides/BarbellBenchPress/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.chest,
            muscles.upperBody.triceps,
            muscles.upperBody.shoulders
        ],
        difficulty: "Novice",
        equipment: [
            "Barbell",
            "Bench"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Keep elbows at a 45 degree angle",
            "Have someone spot you in case you can't rerack the barbell",
            "Keep the bar path in a straight line"
        ],
        tips: [
            "Squeeze shoulder blades together",
            "Focus on pushing with your chest, not your arms"
        ]
    },
    {
        name: "Dumbbell Bench Press",
        visualSrc: "images/guides/DumbbellBenchPress/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.chest,
            muscles.upperBody.triceps,
            muscles.upperBody.shoulders
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell",
            "Bench"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Keep elbows at a 45 degree angle",
            "Keep the bar path in a straight line"
        ],
        tips: [
            "Squeeze shoulder blades together",
            "Focus on pushing with your chest, not your arms"
        ]
    },
    {
        name: "Conventional Barbell Deadlift",
        visualSrc: "images/guides/ConventionalBarbellDeadlift/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.lowerBody.lowerBack,
            muscles.lowerBody.hamstrings,
            muscles.lowerBody.glutes,
            muscles.lowerBody.calves,
            muscles.upperBody.core,
            muscles.lowerBody.quadriceps
        ],
        difficulty: "Intermediate",
        equipment: [
            "Barbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Always breathe out before you lower to the ground"
        ],
        tips: [
            "Keep the neck neutral",
            "Keep a straight back",
            "Deep breath before you lift, exhale at top of rep",
            "Low reps with high volume is most effective for deadlifts"
        ]
    },
    {
        name: "Barbell Squat",
        visualSrc: "images/guides/BarbellSquat/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.lowerBody.lowerBack,
            muscles.lowerBody.hamstrings,
            muscles.lowerBody.glutes,
            muscles.lowerBody.calves,
            muscles.upperBody.core,
            muscles.lowerBody.quadriceps,
        ],
        difficulty: "Intermediate",
        equipment: [
            "Barbell",
            "Squat Rack"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Lat Pulldown",
        visualSrc: "images/guides/LatPulldown/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.upperBody.core,
        ],
        difficulty: "Beginner",
        equipment: [
            "Cable Pulley Station"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Barbell Curl",
        visualSrc: "images/guides/BarbellCurl/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.forearms,
            muscles.upperBody.biceps,
            muscles.upperBody.core
        ],
        difficulty: "Beginner",
        equipment: [
            "Barbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Barbell Reverse Curl",
        visualSrc: "images/guides/BarbellReverseCurl/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.forearms,
            muscles.upperBody.biceps,
            muscles.upperBody.core
        ],
        difficulty: "Beginner",
        equipment: [
            "Barbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Overhead Dumbbell Tricep Extension",
        visualSrc: "images/guides/OverheadDumbbellTricepExtension/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.triceps,
            muscles.upperBody.core,
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Pullup",
        visualSrc: "images/guides/Pullup/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.upperBody.biceps,
            muscles.upperBody.core
        ],
        difficulty: "Novice",
        equipment: [
            "Pullup Bar"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Chinup",
        visualSrc: "images/guides/Chinup/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.upperBody.upperBack,
            muscles.upperBody.core
        ],
        difficulty: "Novice",
        equipment: [
            "Pullup Bar"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Concentration Curl",
        visualSrc: "images/guides/ConcentrationCurl/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.biceps
        ],
        difficulty: "Beginner",
        equipment: [
            "Dumbbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Dumbbell Stiff Leg Deadlift",
        visualSrc: "images/guides/DumbbellStiffLegDeadlift/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.lowerBody.lowerBack,
            muscles.lowerBody.hamstrings,
            muscles.lowerBody.quadriceps,
            muscles.upperBody.core
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell",
            "Barbell",
            "Kettlebell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Farmer's Walk",
        visualSrc: "images/guides/FarmersWalk/1.jpg",
        numVisuals: "1",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.lowerBody.lowerBack,
            muscles.upperBody.forearms,
            muscles.lowerBody.quadriceps,
            muscles.lowerBody.hamstrings,
            muscles.upperBody.core
        ],
        difficulty: "Beginner",
        equipment: [
            "Dumbbell",
            "Kettlebell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Deadhang",
        visualSrc: "images/guides/Deadhang/1.jpg",
        numVisuals: "1",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.upperBody.forearms,
            muscles.upperBody.core,
            muscles.upperBody.shoulders
        ],
        difficulty: "Beginner",
        equipment: [
            "Pullup Bar"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Bent Barbell Row",
        visualSrc: "images/guides/BentBarbellRow/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.upperBack,
            muscles.lowerBody.lowerBack,
            muscles.upperBody.biceps,
            muscles.upperBody.core,
        ],
        difficulty: "Novice",
        equipment: [
            "Barbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Rear Raise",
        visualSrc: "images/guides/RearRaise/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.shoulders
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell",
            "Kettlebell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Lateral Raise",
        visualSrc: "images/guides/LateralRaise/1.jpg",
        muscleGroups: [
            muscles.upperBody.shoulders
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell",
            "Kettlebell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Goblet Squat",
        visualSrc: "images/guides/GobletSquat/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.lowerBody.hamstrings,
            muscles.lowerBody.quadriceps,
            muscles.upperBody.core,
            muscles.upperBody.shoulders
        ],
        difficulty: "Beginner",
        equipment: [
            "Dumbbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Pushup",
        visualSrc: "images/guides/Pushup/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.chest,
            muscles.upperBody.triceps,
            muscles.upperBody.shoulders,
            muscles.upperBody.core
        ],
        difficulty: "Beginner",
        equipment: [
            "None"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Dip",
        visualSrc: "images/guides/Dip/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.upperBody.chest,
            muscles.upperBody.triceps,
            muscles.upperBody.shoulders,
            muscles.upperBody.core
        ],
        difficulty: "Novice",
        equipment: [
            "Dip Bars"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Calf Raise",
        visualSrc: "images/guides/CalfRaise/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.lowerBody.calves,
            muscles.upperBody.core
        ],
        difficulty: "Beginner",
        equipment: [
            "None"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Barbell Lunge",
        visualSrc: "images/guides/BarbellLunge/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.lowerBody.quadriceps,
            muscles.lowerBody.hamstrings,
            muscles.upperBody.core
        ],
        difficulty: "Intermediate",
        equipment: [
            "Barbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    },
    {
        name: "Dumbbell Lunge",
        visualSrc: "images/guides/DumbbellLunge/1.jpg",
        numVisuals: "2",
        muscleGroups: [
            muscles.lowerBody.quadriceps,
            muscles.lowerBody.hamstrings,
            muscles.upperBody.core
        ],
        difficulty: "Novice",
        equipment: [
            "Dumbbell"
        ],
        steps: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        warnings: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ],
        tips: [
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu",
            "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum"
        ]
    }
];