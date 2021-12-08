//puts map in index//
var img = document.createElement("img");
img.src = "worldMap.svg";

var div = document.getElementById("worldMap");
div.appendChild(img);
//block.setAttribute("style", "text-align:center");

//highlights text on intro page//
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}

const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn1");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text:
      " According to the World Health Organization, “climate change is expected to cause approximately 250,000 additional deaths per year” between 2030 and 2050, and you are the super hero who can change that! Firstly, You want to reduce your yearly household waste production.",
    options: [
      {
        text:
          " Start buying second-hand clothes, using reusable mask coverings, taking your own bag for a shopping",
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text:
          "Using disposable masks, buying plastic bags and using a car and planes as the main means of transportation but you switch off lights and heating before leaving your house if your remember. ",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text:
      "It is 2028 and the planet is littered with lots of clothes. What can you do?",
    options: [
      {
        text:
          "Stop buying fast-fashion clothes, support garment workers that are used by big companies and start buying good quality clothes only when needed.",
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text:
          "You do not buy new clothes, just alter your old ones or fix if they are destroyed. ",
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text:
          "You keep buying clothes every week on SHEIN and H&M websites and hope Elon Musk will find a way to habitate another planet.",
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text:
      "Because of the glacier and sea ice melting, your city will be under the water and you have to reduce your carbon footprint.",
    options: [
      {
        text:
          "You eat more meat and diary, bought a new petrol car to escape if the city turns into Atlantis and vote for disafforestation in your city. ",
        nextText: 4
      },
      {
        text:
          "You eat less meat and diary, consider buying an electric car, eat seasonal foods and cut consumption",
        nextText: 5
      },
      {
        text:
          "You decide to promote serious consequences of the climate change as well as growing your own veggies, investing your money responsibly and protecting green spaces in your area.",
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text:
      "The world is not the same: animals and plants faced extinction, air pollution is significant and you need to wear a mask at all times and extreme weather (droughts, heat waves, floods and storms) jeopardized access to clean water. There is no planet B. ",
    options: [
      {
        text: "Restart",
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text:
      "You helped the planet and you are a hero! But not everyone was so responsible and the world cannot be saved.",
    options: [
      {
        text:
          "You have another chance to save the planet as you clearly care about your only home! ❤️",
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text:
      "Yay! The world is on a right track to be saved thanks to you! You have changed your homes source of energy to solar, you have been reducing, reusing and recycling. But there is still lots to do to help the planet 😭. ",
    options: [
      {
        text:
          "Let's find out what can I do to help the next generation and myself! ",
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text:
      "You have become terribly popular and forced big companies and governments all around to world to save the planet! As the result, the climate change is not a big threat anymore but population growth, water crisis and wealth inequalities still exist...",
    options: [
      {
        text: "I have already saved the planet. Give me a rest! ",
        nextText: 8
      },
      {
        text:
          "I am famous and rich now! I will donate money to solve this issue!",
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text:
          "Let's forget about the climate change! Now I will resolve those issues!",
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text:
          "After you completed the Web development course with CFG, you decided to learn more about programming and web dev, and you decided to create an app and a website that helped to find new technologies to fight off the water crisis, wealth inequality and population growth! You united people from all around the world to help with the serious global issues that we are facing.",
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text:
      " Although those issues did not impact you directly, you should have been a good person and helped to resolve these issues 😭",
    options: [
      {
        text:
          "Please start again and help to save the planet and other people's lives! ❤️",
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text:
      " As much as I wish, the problems cannot be resolved only from donating money! You helped to make an impact and contributed to resolve the issue but your help is needed as much as your money! 😭",
    options: [
      {
        text:
          "Hey! There is still a chance to save the world! You are a super hero! ❤️",
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text:
      " You forgot about the climate change and started to use a petrol car again, plastic bags, more energy than before and eat more meat! Here we go again 😭!",
    options: [
      {
        text: "Try again! You are on the right track!",
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text:
      "You created an app that gets money from advertisements to pay engineers for their projects to solve the global issues and you developed websites which inform other people about the climate change and other serious problems! You have used your gained knowledge from the CFG programme to save the planet and you did it! Yay! ",
    options: [
      {
        text:
          "Congratulations! ❤️ Please remember to switch off the lights when you finish celebrating!",
        nextText: -1
      }
    ]
  }
];

startGame();