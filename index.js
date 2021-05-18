const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "==";
var token = process.env.token;

client.on("ready", () => {
  console.log("Oh yes");
    client.user.setPresence({
      status: "dnd",
      activity: {
          name: "==help",
          type: "PLAYING"
      }
    })
});

function embedSender(title, color, description) {
  var embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setColor(color)
      .setDescription(description)
      return embed;
}

date = ["월", "화", "수", "목", "금"] //부가 어레이
function tt(a, b, c, d) {
      if(a == "help"){
          return embedSender("서해중학교 3학년 시간표 봇 사용 방법입니다", 0x00ff99, "일반적으로 시간표를 사용할땐\n\
          **==(반) (요일) (교시)로 사용합니다**\n\
          ex) ==6 1 1 (6반 월요일 1교시) ```6반 월요일 1교시 \n수업 \n정보 \n김혜란선생님 \nhttps:us04web.zoom.us/j/5415952858?pwd=OUdFeWdCVkZyVzhudmNaVU1CRVZxZz09```\n\
          조례 종례, 또는 반의 시간표 전체를 확인할수도 있습니다\n\
          **==(반) (조례 or 종례 or 시간표)**\n\
          ex) ==6 조례 ```6반 조례 \n\이준서선생님 \nhttps://us02web.zoom.us/j/8687258653?pwd=Q0ZzclJUVVRkaGI0Z2x4R3ZrNXdxQT09```\n\
          ***AND TREMENDOUS THANKS FOR cjddig***");
    }
    if (d.length == 1) {
        if (Fourth_Nogada(a, b, c) == "invalid") {
            return embedSender("정확한 값을 입력해주세요.", 0x00ff99, "");
        }
        else {
            return embedSender(`${a}반\n${b}\n${Fourth_Nogada(a, b)}`, 0x00ff99, "");
        }
    }
    if (d.length == 2) {
        if (First_Nogada(a, b, c) == "invalid") {
            return embedSender("정확한 값을 입력해주세요.", 0x00ff99, "");
        }
        else if(First_Nogada(a, b, c) == "자율"){
            return embedSender("자율시간입니다. 자세한건 담임선생님 공지를 따라주세요.", 0x00ff99, "");
        }
        else if(Additional_Nogada(a, b, c) == "doesntexist"){
            return embedSender("시간표 정보가 없습니다.", 0x00ff99, "");
        }
        else if(First_Nogada(a, b, c) == "None"){
            return embedSender("6교시 혹은 7교시 수업이 존재하지 않음", 0x00ff99, "");
        }
        else if(Third_Nogada(a, b, c) == "Sport"){
            return embedSender("스포츠에요", 0x00ff99, "");
        }
        else{
            return embedSender(`${a}반 ${date[b-1]}요일 ${c}교시 수업\n`, 0x00ff99, `${First_Nogada(a, b, c)}\n${Second_Nogada(a, b, c)}\n${Third_Nogada(a, b, c)}`);
        }
    }
}

client.on('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(prefix)) return; 
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var cmd = args.shift(); 
  msg.channel.send(tt(cmd, args[0], args[1], args));
});

  /*function timeschedule() {
    return msg.channel.send(`${classNum}반 시간표`);
  }
  function morningMeet() {
    return msg.channel.send(`${classNum}반 조례`);
  }
  function afterSchool() {
      return msg.channel.send(`${classNum}반 종례`);
  }
  function timeTable() {
    return msg.channel.send(`${classNum}반 ${period}교시 ${day} 수업`);
  }
  function doNotExist7th() {
    return msg.channel.send("7교시 수업이 존재하지 않음");
  }*/
function First_Nogada(a, b, c){
    switch(a){
      case "1":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "영어";
              case "2":
                return "국어";
              case "3":
                return "체육";
              case "4":
                return "역사";
              case "5":
                return "정보";
              case "6":
                return "정보";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "수학";
              case "2":
                return "국어";
              case "3":
                return "과학";
              case "4":
                return "사회";
              case "5":
                return "영어";
              case "6":
                return "음악";
              case "7":
                return "미술";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "과학";
                case "3":
                  return "스/사";
                case "4":
                  return "스/사";
                case "5":
                  return "중어";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "체육";
                case "2":
                  return "과학";
                case "3":
                  return "영어";
                case "4":
                  return "국어";
                case "5":
                  return "수학";
                case "6":
                  return "사회";
                case "7":
                  return "역사";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "중어";
                case "2":
                  return "영어";
                case "3":
                  return "국어";
                case "4":
                  return "수학";
                case "5":
                  return "체육";
                case "6":
                  return "과학";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "2":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "수학";
              case "2":
                return "중어";
              case "3":
                return "과학";
              case "4":
                return "영어";
              case "5":
                return "국어";
              case "6":
                return "미술";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "사회";
              case "2":
                return "음악";
              case "3":
                return "수학";
              case "4":
                return "국어";
              case "5":
                return "체육";
              case "6":
                return "과학";
              case "7":
                return "영어";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "사회";
                case "2":
                  return "역사";
                case "3":
                  return "스/체";
                case "4":
                  return "스/체";
                case "5":
                  return "국어";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                   return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "역사";
                case "3":
                  return "사회";
                case "4":
                  return "체육";
                case "5":
                  return "국어";
                case "6":
                  return "영어";
                case "7":
                  return "과학";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "영어";
                case "2":
                  return "과학";
                case "3":
                  return "수학";
                case "4":
                  return "중어";
                case "5":
                  return "정보";
                case "6":
                  return "정보";
                case "7":
                  return "None";
                default:
                  return "invalid"; 
              }
              default:
                return "invalid";    
      }
      case "3":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "체육";
              case "2":
                return "영어";
              case "3":
                return "국어";
              case "4":
                return "수학";
              case "5":
                return "중어";
              case "6":
                return "역사";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "체육";
              case "2":
                return "영어";
              case "3":
                return "미술";
              case "4":
                return "과학";
              case "5":
                return "사회";
              case "6":
                return "수학";
              case "7":
                return "국어";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "정보";
                case "2":
                  return "정보";
                case "3":
                  return "영어";
                case "4":
                  return "스포";
                case "5":
                  return "과학";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "사회";
                case "2":
                  return "중어";
                case "3":
                  return "수학";
                case "4":
                  return "과학";
                case "5":
                  return "영어";
                case "6":
                  return "체육";
                case "7":
                  return "국어";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "사회";
                case "3":
                  return "음악";
                case "4":
                  return "과학";
                case "5":
                  return "국어";
                case "6":
                  return "역사";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "4":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "중어";
              case "2":
                return "과학";
              case "3":
                return "역사";
              case "4":
                return "음악";
              case "5":
                return "수학";
              case "6":
                return "체육";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "국어";
              case "2":
                return "사회";
              case "3":
                return "영어";
              case "4":
                return "수학";
              case "5":
                return "정보";
              case "6":
                return "정보";
              case "7":
                return "과학";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "미술";
                case "2":
                  return "영어";
                case "3":
                  return "국어";
                case "4":
                  return "스포";
                case "5":
                  return "수학";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "국어";
                case "2":
                  return "영어";
                case "3":
                  return "체육";
                case "4":
                  return "사회";
                case "5":
                  return "과학";
                case "6":
                  return "수학";
                case "7":
                  return "중어";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "과학";
                case "2":
                  return "체육";
                case "3":
                  return "역사";
                case "4":
                  return "사회";
                case "5":
                  return "영어";
                case "6":
                  return "국어";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "5":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "역사";
              case "2":
                return "사회";
              case "3":
                return "영어";
              case "4":
                return "체육";
              case "5":
                return "과학";
              case "6":
                return "수학";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "사회";
              case "2":
                return "중어";
              case "3":
                return "미술";
              case "4":
                return "영어";
              case "5":
                return "국어";
              case "6":
                return "과학";
              case "7":
                return "수학";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "체육";
                case "2":
                  return "국어";
                case "3":
                  return "스/과";
                case "4":
                  return "스/과";
                case "5":
                  return "영어";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "국어";
                case "3":
                  return "영어";
                case "4":
                  return "과학";
                case "5":
                  return "사회";
                case "6":
                  return "정보";
                case "7":
                  return "정보";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "국어";
                case "2":
                  return "역사";
                case "3":
                  return "체육";
                case "4":
                  return "음악";
                case "5":
                  return "중어";
                case "6":
                  return "수학";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "6":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "정보";
              case "2":
                return "정보";
              case "3":
                return "국어";
              case "4":
                return "과학";
              case "5":
                return "체육";
              case "6":
                return "음악";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "영어";
              case "2":
                return "사회";
              case "3":
                return "과학";
              case "4":
                return "국어";
              case "5":
                return "수학";
              case "6":
                return "중어";
              case "7":
                return "역사";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "영어";
                case "3":
                  return "스/체";
                case "4":
                  return "스/체";
                case "5":
                  return "수학";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "체육";
                case "2":
                  return "사회";
                case "3":
                  return "중어";
                case "4":
                  return "수학";
                case "5":
                  return "영어";
                case "6":
                  return "과학";
                case "7":
                  return "국어";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "사회";
                case "2":
                  return "국어";
                case "3":
                  return "과학";
                case "4":
                  return "수학";
                case "5":
                  return "미술";
                case "6":
                  return "영어";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "7":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "영어";
              case "2":
                return "과학";
              case "3":
                return "음악";
              case "4":
                return "체육";
              case "5":
                return "수학";
              case "6":
                return "중어";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "수학";
              case "2":
                return "역사";
              case "3":
                return "국어";
              case "4":
                return "중어";
              case "5":
                return "사회";
              case "6":
                return "과학";
              case "7":
                return "영어";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "수학";
                case "2":
                  return "국어";
                case "3":
                  return "스/과";
                case "4":
                  return "스/과";
                case "5":
                  return "체육";
                case "6":
                  return "None";
                case "7":
                  return "None";
              }
            case "4":
              switch(c){
                case "1":
                  return "사회";
                case "2":
                  return "수학";
                case "3":
                  return "국어";
                case "4":
                  return "체육";
                case "5":
                  return "과학";
                case "6":
                  return "역사";
                case "7":
                  return "영어";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "정보";
                case "2":
                  return "정보";
                case "3":
                  return "사회";
                case "4":
                  return "국어";
                case "5":
                  return "영어";
                case "6":
                  return "미술";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "8":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "과학";
              case "2":
                return "수학";
              case "3":
                return "사회";
              case "4":
                return "국어";
              case "5":
                return "체육";
              case "6":
                return "영어";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "과학";
              case "2":
                return "정보";
              case "3":
                return "정보";
              case "4":
                return "수학";
              case "5":
                return "역사";
              case "6":
                return "영어";
              case "7":
                return "국어";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "국어";
                case "2":
                  return "중어";
                case "3":
                  return "스/음";
                case "4":
                  return "스/음";
                case "5":
                  return "사회";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "영어";
                case "2":
                  return "체육";
                case "3":
                  return "과학";
                case "4":
                  return "역사";
                case "5":
                  return "중어";
                case "6":
                  return "국어";
                case "7":
                  return "수학";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "체육";
                case "2":
                  return "수학";
                case "3":
                  return "영어";
                case "4":
                  return "미술";
                case "5":
                  return "사회";
                case "6":
                  return "과학";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      case "9":
        switch(b){
          case "1":
            switch(c){
              case "1":
                return "음악";
              case "2":
                return "체육";
              case "3":
                return "수학";
              case "4":
                return "영어";
              case "5":
                return "과학";
              case "6":
                return "국어";
              case "7":
                return "자율";
              default:
                return "invalid";
            }
          case "2":
            switch(c){
              case "1":
                return "역사";
              case "2":
                return "수학";
              case "3":
                return "영어";
              case "4":
                return "사회";
              case "5":
                return "과학";
              case "6":
                return "국어";
              case "7":
                return "중어";
              default:
                return "invalid";
            }
            case "3":
              switch(c){
                case "1":
                  return "영어";
                case "2":
                  return "수학";
                case "3":
                  return "사회";
                case "4":
                  return "스포";
                case "5":
                  return "역사";
                case "6":
                  return "None";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
            case "4":
              switch(c){
                case "1":
                  return "과학";
                case "2":
                  return "정보";
                case "3":
                  return "정보";
                case "4":
                  return "국어";
                case "5":
                  return "수학";
                case "6":
                  return "사회";
                case "7":
                  return "체육";
                default:
                  return "invalid";
              }
            case "5":
              switch(c){
                case "1":
                  return "영어";
                case "2":
                  return "중어";
                case "3":
                  return "미술";
                case "4":
                  return "체육";
                case "5":
                  return "과학";
                case "6":
                  return "국어";
                case "7":
                  return "None";
                default:
                  return "invalid";
              }
              default:
                return "invalid";
      }
      default:
        return "invalid";
  }
}

function Additional_Nogada(a, b, c){
  switch(a){
    case "1":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "앞반영어";
            case "2":
              return "앞반국어";
            case "3":
              return "앞반체육";
            case "4":
              return "역사";
            case "5":
              return "정보";
            case "6":
              return "정보";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "앞반수학";
            case "2":
              return "앞반국어";
            case "3":
              return "앞반과학";
            case "4":
              return "앞반사회";
            case "5":
              return "앞반영어";
            case "6":
              return "음악";
            case "7":
              return "앞반미술";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "앞반수학";
              case "2":
                return "앞반과학";
              case "3":
                return "1반스/사";
              case "4":
                return "1반스/사";
              case "5":
                return "중어";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "앞반체육";
              case "2":
                return "앞반과학";
              case "3":
                return "앞반영어";
              case "4":
                return "앞반국어";
              case "5":
                return "앞반수학";
              case "6":
                return "앞반사회";
              case "7":
                return "역사";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "중어";
              case "2":
                return "앞반영어";
              case "3":
                return "앞반국어";
              case "4":
                return "앞반수학";
              case "5":
                return "앞반체육";
              case "6":
                return "앞반과학";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "2":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "앞반수학";
            case "2":
              return "중어";
            case "3":
              return "앞반과학";
            case "4":
              return "앞반영어";
            case "5":
              return "앞반국어";
            case "6":
              return "앞반미술";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "앞반사회";
            case "2":
              return "앞반음악";
            case "3":
              return "앞반수학";
            case "4":
              return "앞반국어";
            case "5":
              return "앞반체육";
            case "6":
              return "앞반과학";
            case "7":
              return "앞반영어";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "앞반사회";
              case "2":
                return "역사";
              case "3":
                return "2반스/체";
              case "4":
                return "2반스/체";
              case "5":
                return "앞반국어";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                 return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "앞반수학";
              case "2":
                return "역사";
              case "3":
                return "앞반사회";
              case "4":
                return "앞반체육";
              case "5":
                return "앞반국어";
              case "6":
                return "앞반영어";
              case "7":
                return "앞반과학";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "앞반영어";
              case "2":
                return "앞반과학";
              case "3":
                return "앞반수학";
              case "4":
                return "중어";
              case "5":
                return "정보";
              case "6":
                return "정보";
              case "7":
                return "None";
              default:
                return "invalid"; 
            }
            default:
              return "invalid";    
    }
    case "3":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "앞반체육";
            case "2":
              return "앞반영어";
            case "3":
              return "앞반국어";
            case "4":
              return "앞반수학";
            case "5":
              return "중어";
            case "6":
              return "역사";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "앞반체육";
            case "2":
              return "앞반영어";
            case "3":
              return "앞반미술";
            case "4":
              return "앞반과학";
            case "5":
              return "앞반사회";
            case "6":
              return "앞반수학";
            case "7":
              return "앞반국어";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "정보";
              case "2":
                return "정보";
              case "3":
                return "앞반영어";
              case "4":
                return "스포";
              case "5":
                return "앞반과학";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "앞반사회";
              case "2":
                return "중어";
              case "3":
                return "앞반수학";
              case "4":
                return "앞반과학";
              case "5":
                return "앞반영어";
              case "6":
                return "앞반체육";
              case "7":
                return "앞반국어";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "앞반수학";
              case "2":
                return "앞반사회";
              case "3":
                return "음악";
              case "4":
                return "앞반과학";
              case "5":
                return "앞반국어";
              case "6":
                return "역사";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "4":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "중어";
            case "2":
              return "앞반과학";
            case "3":
              return "앞반역사";
            case "4":
              return "음악";
            case "5":
              return "앞반수학";
            case "6":
              return "앞반체육";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "앞반국어";
            case "2":
              return "앞반사회";
            case "3":
              return "앞반영어";
            case "4":
              return "앞반수학";
            case "5":
              return "정보";
            case "6":
              return "정보";
            case "7":
              return "앞반과학";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "중간반미술";
              case "2":
                return "앞반영어";
              case "3":
                return "앞반국어";
              case "4":
                return "스포";
              case "5":
                return "앞반수학";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "앞반국어";
              case "2":
                return "앞반영어";
              case "3":
                return "앞반체육";
              case "4":
                return "앞반사회";
              case "5":
                return "앞반과학";
              case "6":
                return "앞반수학";
              case "7":
                return "중어";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "앞반과학";
              case "2":
                return "앞반체육";
              case "3":
                return "역사";
              case "4":
                return "앞반사회";
              case "5":
                return "앞반영어";
              case "6":
                return "앞반국어";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "5":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "역사";
            case "2":
              return "앞반사회";
            case "3":
              return "앞반영어";
            case "4":
              return "앞반체육";
            case "5":
              return "중간반과학";
            case "6":
              return "앞반수학";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "뒷반사회";
            case "2":
              return "중어";
            case "3":
              return "중간반미술";
            case "4":
              return "앞반영어";
            case "5":
              return "앞반국어";
            case "6":
              return "중간반과학";
            case "7":
              return "앞반수학";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "앞반체육";
              case "2":
                return "앞반국어";
              case "3":
                return "5반스/과";
              case "4":
                return "5반스/과";
              case "5":
                return "앞반영어";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "앞반수학";
              case "2":
                return "앞반국어";
              case "3":
                return "앞반영어";
              case "4":
                return "중간반과학";
              case "5":
                return "뒷반사회";
              case "6":
                return "정보";
              case "7":
                return "정보";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "앞반국어";
              case "2":
                return "역사";
              case "3":
                return "앞반체육";
              case "4":
                return "음악";
              case "5":
                return "중어";
              case "6":
                return "앞반수학";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "6":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "정보";
            case "2":
              return "정보";
            case "3":
              return "뒷반국어";
            case "4":
              return "뒷반과학";
            case "5":
              return "중간반체육";
            case "6":
              return "음악";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "뒷반영어";
            case "2":
              return "뒷반사회";
            case "3":
              return "뒷반과학";
            case "4":
              return "뒷반국어";
            case "5":
              return "뒷반수학";
            case "6":
              return "중어";
            case "7":
              return "역사";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "역사";
              case "2":
                return "뒷반영어";
              case "3":
                return "6반스/체";
              case "4":
                return "6반스/체";
              case "5":
                return "뒷반수학";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "중간반체육";
              case "2":
                return "뒷반사회";
              case "3":
                return "중어";
              case "4":
                return "뒷반수학";
              case "5":
                return "뒷반영어";
              case "6":
                return "뒷반과학";
              case "7":
                return "뒷반국어";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "뒷반사회";
              case "2":
                return "뒷반국어";
              case "3":
                return "뒷반과학";
              case "4":
                return "뒷반수학";
              case "5":
                return "뒷반미술";
              case "6":
                return "뒷반영어";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "7":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "뒷반영어";
            case "2":
              return "뒷반과학";
            case "3":
              return "음악";
            case "4":
              return "중간반체육";
            case "5":
              return "뒷반수학";
            case "6":
              return "중어";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "뒷반수학";
            case "2":
              return "역사";
            case "3":
              return "뒷반국어";
            case "4":
              return "중어";
            case "5":
              return "뒷반사회";
            case "6":
              return "뒷반과학";
            case "7":
              return "뒷반영어";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "뒷반수학";
              case "2":
                return "뒷반국어";
              case "3":
                return "7반스/과";
              case "4":
                return "7반스/과";
              case "5":
                return "중간반체육";
              case "6":
                return "None";
              case "7":
                return "None";
            }
          case "4":
            switch(c){
              case "1":
                return "뒷반사회";
              case "2":
                return "뒷반수학";
              case "3":
                return "뒷반국어";
              case "4":
                return "중간반체육";
              case "5":
                return "뒷반과학";
              case "6":
                return "역사";
              case "7":
                return "뒷반영어";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "정보";
              case "2":
                return "정보";
              case "3":
                return "뒷반사회";
              case "4":
                return "뒷반국어";
              case "5":
                return "뒷반영어";
              case "6":
                return "뒷반미술";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "8":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "뒷반과학";
            case "2":
              return "뒷반수학";
            case "3":
              return "뒷반사회";
            case "4":
              return "뒷반국어";
            case "5":
              return "뒷반체육";
            case "6":
              return "뒷반영어";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "뒷반과학";
            case "2":
              return "정보";
            case "3":
              return "정보";
            case "4":
              return "뒷반수학";
            case "5":
              return "역사";
            case "6":
              return "뒷반영어";
            case "7":
              return "뒷반국어";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "뒷반국어";
              case "2":
                return "중어";
              case "3":
                return "8반스/음";
              case "4":
                return "8반스/음";
              case "5":
                return "뒷반사회";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "뒷반영어";
              case "2":
                return "뒷반체육";
              case "3":
                return "뒷반과학";
              case "4":
                return "역사";
              case "5":
                return "중어";
              case "6":
                return "뒷반국어";
              case "7":
                return "뒷반수학";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "뒷반체육";
              case "2":
                return "뒷반수학";
              case "3":
                return "뒷반영어";
              case "4":
                return "뒷반미술";
              case "5":
                return "뒷반사회";
              case "6":
                return "뒷반과학";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    case "9":
      switch(b){
        case "1":
          switch(c){
            case "1":
              return "음악";
            case "2":
              return "뒷반체육";
            case "3":
              return "뒷반수학";
            case "4":
              return "뒷반영어";
            case "5":
              return "뒷반과학";
            case "6":
              return "뒷반국어";
            case "7":
              return "자율";
            default:
              return "invalid";
          }
        case "2":
          switch(c){
            case "1":
              return "역사";
            case "2":
              return "뒷반수학";
            case "3":
              return "뒷반영어";
            case "4":
              return "뒷반사회";
            case "5":
              return "뒷반과학";
            case "6":
              return "뒷반국어";
            case "7":
              return "중어";
            default:
              return "invalid";
          }
          case "3":
            switch(c){
              case "1":
                return "뒷반영어";
              case "2":
                return "뒷반수학";
              case "3":
                return "뒷반사회";
              case "4":
                return "스포";
              case "5":
                return "역사";
              case "6":
                return "None";
              case "7":
                return "None";
              default:
                return "invalid";
            }
          case "4":
            switch(c){
              case "1":
                return "뒷반과학";
              case "2":
                return "정보";
              case "3":
                return "정보";
              case "4":
                return "뒷반국어";
              case "5":
                return "뒷반수학";
              case "6":
                return "뒷반사회";
              case "7":
                return "뒷반체육";
              default:
                return "invalid";
            }
          case "5":
            switch(c){
              case "1":
                return "뒷반영어";
              case "2":
                return "중어";
              case "3":
                return "뒷반미술";
              case "4":
                return "뒷반체육";
              case "5":
                return "뒷반과학";
              case "6":
                return "뒷반국어";
              case "7":
                return "None";
              default:
                return "invalid";
            }
            default:
              return "invalid";
    }
    default:
      return "invalid";
}
}

function Second_Nogada(a, b, c){
    switch(Additional_Nogada(a, b, c)){
      case "앞반국어":
        return '안현아선생님';
      case "뒷반국어":
        return '강현주선생님';
      case "앞반수학":
        return '김병재선생님';
      case "뒷반수학":
        return '이준서선생님';
      case "앞반과학":
        return '김시용선생님';
      case "중간반과학":
        return '박성연선생님';
      case "뒷반과학":
        return '김향숙선생님';
      case "앞반사회":
        return '서진화선생님';
      case "뒷반사회":
        return '곽지영선생님';
      case "역사":
        return '송혜경선생님';
      case "앞반영어":
        return '강지현선생님';
      case "뒷반영어":
        return '윤혜진선생님';
      case "음악":
        return '권민수선생님';
      case "자율":
        return 'free';
      case "앞반미술":
        return '김승미선생님';
      case "중간반미술":
        return '김현아선생님';
      case "뒷반미술":
        return '민솔선생님';
      case "정보":
        return '김혜란선생님';
      case "중어":
        return '고은정선생님';
      case "앞반체육":
        return '진현호선생님';
      case "중간반체육":
        return '이상윤선생님';
      case "뒷반체육":
        return '홍영상선생님';
      case "5반스/과":
        return '스포츠 또는 과학입니다. 과학일땐 뒤에 링크를 타주세요.';//중간반(박성연선생님)
      case "7반스/과":
        return '스포츠 또는 과학입니다. 과학일땐 뒤에 링크를 타주세요'; //뒷반(김향숙선생님)
      case "1반스/사":
        return '스포츠 또는 사회입니다. 사회일땐 뒤에 링크를 타주세요.';//앞반
      case "8반스/음":
        return '스포츠 또는 음악입니다. 음악일땐 뒤에 링크를 타주세요.';
      case "2반스/체":
        return '스포츠 또는 체육입니다. 체육일땐 뒤에 링크를 타주세요.';//앞반 
      case "6반스/체":
        return '스포츠 또는 체육입니다. 체육일땐 뒤에 링크를 타주세요';//뒷반(뒷반 앞반 구분하려고 . 없앰)
      case "스포":
        return '스포츠입니다.'
      default:
        return "invalid";
    }
  }

function Third_Nogada(a, b, c){
    switch(Second_Nogada(a, b, c)){
      case "안현아선생님":
        return 'https://zoom.us/j/7094608456?pwd=cGtQU3NqK3lmOUd0OFpPUldHNnc1UT09';
      case "강현주선생님":
        return 'https://zoom.us/j/9990031320?pwd=Q01IaVJYeHBRUjBWbHptemp1dGFnQT09';
      case "김병재선생님":
        return 'https://zoom.us/j/7594714613?pwd=UEFQTE01SFZRYWcxYUhPS05NOFZZUT09';
      case "이준서선생님":
        return 'https://us02web.zoom.us/j/8687258653?pwd=Q0ZzclJUVVRkaGI0Z2x4R3ZrNXdxQT09';
      case "김시용선생님":
        return 'https://us02web.zoom.us/j/2521617249?pwd=bkRkVkVha2Jrb3JQNVFrNnFNNVNyUT09';
      case "김향숙선생님":
        return 'https://zoom.us/j/3121363871?pwd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09'
      case "서진화선생님":
        return 'https://zoom.us/j/4282444812?pwd=NjZDekViWlJjREpiR0t0dkIwaC9wdz09';
      case "김현아선생님":
        return 'https://us02web.zoom.us/j/7957340540?pwd=SmwvemFL3VnYONiOGlqNWRUYWJMQT09';
      case "곽지영선생님":
        return 'https://zoom.us/j/2029525829?pwd=dlphNVZCekdMSkdoeFpjSEp1eUF6dz09';
      case "송혜경선생님":
        return 'https://zoom.us/j/8721927402?pwd=cTJyKzBQUXRMb3owNFU1bkM1VllrUT09';
      case "강지현선생님":
        return 'https://zoom.us/j/6297632473?pwd=dmI0aEVZc3N1Q29lejVjU1dqTGt0Zz09';
      case "윤혜진선생님":
        return 'https://zoom.us/j/3553534243?pwd=RkNWSWNKT000d2ZWNHpwZE9sang0QT09';
      case "권민수선생님":
        return 'https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09';
      case "박성연선생님":
        return 'https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09';
      case "김승미선생님":
        return 'https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09';
      case "민솔선생님":
        return 'https://us02web.zoom.us/j/3071954981?pwd=dXhMZkk2eE9LbkR3eHpuQnoxNUx1dz09';
      case "김혜란선생님":
        return 'https://us04web.zoom.us/j/5415952858?pwd=OUdFeWdCVkZyVzhudmNaVU1CRVZxZz09';
      case "고은정선생님":
        return 'https://zoom.us/j/6064581563?pwd=SmJ3M0lEaFhGMTRsR0NKWkQxbVdOQT09';
      case "진현호선생님":
        return 'https://zoom.us/j/4473861954?pwd=NFRwaHZQVTNaU3YwVTRvcjBZQUJaQT09';
      case "이상윤선생님":
        return 'https://zoom.us/j/4465173047?pwd=dnpvUnE4MkF0YlFBMFpHMTE4ZFQ5UT09';
      case "홍영상선생님":
        return 'https://zoom.us/j/5810363056?pwd=UkhTV3BZRmt6RHhRcTl6OFp1a1pSUT09';
      case "free":
        return '자율시간입니다. 자세한건 담임선생님 공지를 따라주세요.';
      case "스포츠 또는 과학입니다. 과학일땐 뒤에 링크를 타주세요.":
        return 'https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09';
      case "스포츠 또는 과학입니다. 과학일땐 뒤에 링크를 타주세요":
        return 'https://zoom.us/j/3121363871?pwd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09';
      case "스포츠 또는 사회입니다. 사회일땐 뒤에 링크를 타주세요.":
        return 'https://zoom.us/j/4282444812?pwd=NjZDekViWlJjREpiR0t0dkIwaC9wdz09';
      case "스포츠 또는 음악입니다. 음악일땐 뒤에 링크를 타주세요.":
        return 'https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09';
      case "스포츠 또는 체육입니다. 체육일땐 뒤에 링크를 타주세요.":
        return 'https://zoom.us/j/4473861954?pwd=NFRwaHZQVTNaU3YwVTRvcjBZQUJaQT09';
      case "스포츠 또는 체육입니다. 체육일땐 뒤에 링크를 타주세요":
        return 'https://zoom.us/j/4465173047?pwd=dnpvUnE4MkF0YlFBMFpHMTE4ZFQ5UT09';
      case "스포츠입니다.":
        return "Sport";
      default:
        return "invalid";
    }
  }

function Fourth_Nogada(a, b) {
  switch(a){
    case "1":
      switch(b){
        case "종례":
        case "조례":
          return '안현아선생님\nhttps://zoom.us/j/7094608456?pwd=cGtQU3NqK3lmOUd0OFpPUldHNnc1UT09';
        case "시간표":
          return '월 : 영어 국어 체육 역사 정보 정보 자율\n화 : 수학 국어 과학 사회 영어 음악 미술\n수 : 수학 과학 스/사 스/사 중어\n목 : 체육 과학 영어 국어 수학 사회 역사\n금 : 중어 영어 국어 수학 체육 과학';
        default:
          return 'invalid';
      }
    case "2":
      switch(b){
        case "종례":
        case "조례":
          return '진현호선생님\nhttps://zoom.us/j/4473861954?pwd=NFRwaHZQVTNaU3YwVTRvcjBZQUJaQT09';
        case "시간표":
          return '월 : 수학 중어 과학 영어 국어 미술 자율\n화 : 사회 음악 수학 국어 체육 과학 영어\n수 : 사회 역사 스/체 스/체 국어\n목 : 수학 역사 사회 체육 국어 영어 과학\n 금: 영어 과학 수학 중어 정보 정보';
        default:
          return 'invalid';
      }
    case "3":
      switch(b){
        case "종례":
        case "조례":
          return '김시용선생님\nhttps://us02web.zoom.us/j/2521617249?pwd=bkRkVkVha2Jrb3JQNVFrNnFNNVNyUT09';
        case "시간표":
          return '월 : 체육 영어 국어 수학 중어 역사 자율\n화 : 체육 영어 미술 과학 사회 수학 국어\n수 : 정보 정보 영어 스포 과학\n목 : 사회 중어 수학 과학 영어 체육 국어\n금 : 수학 사회 음악 과학 국어 역사';
        default:
          return 'invalid';
      }
    case "4":
      switch(b){
        case "종례":
        case "조례":
          return '강지현선생님\nhttps://zoom.us/j/6297632473?pwd=dmI0aEVZc3N1Q29lejVjU1dqTGt0Zz09';
        case "시간표":
          return '월 : 중어 과학 역사 음악 수학 체육 자율\n화 : 국어 사회 영어 수학 정보 정보 과학\n수 : 미술 영어 국어 스포 수학\n목 : 국어 영어 체육 사회 과학 수학 중어\n금 : 과학 체육 역사 사회 영어 국어';
        default:
          return 'invalid';
      }
    case "5":
      switch(b){
        case "종례":
        case "조례":
          return '송혜경선생님\nhttps://zoom.us/j/8721927402?pwd=cTJyKzBQUXRMb3owNFU1bkM1VllrUT09';
        case "시간표":
          return '월 : 역사 사회 영어 체육 과학 수학 자율\n화 : 사회 중어 미술 영어 국어 과학 수학\n수 : 체육 국어 스/과 스/과 영어\n목 : 수학 국어 영어 과학 사회 정보 정보\n금 : 국어 역사 체육 음악 중어 수학';
        default:
          return 'invalid';
      }
    case "6":
      switch(b){
        case "종례":
        case "조례":
          return '이준서선생님\nhttps://us02web.zoom.us/j/8687258653?pwd=Q0ZzclJUVVRkaGI0Z2x4R3ZrNXdxQT09';
        case "시간표":
          return '월 : 정보 정보 국어 과학 체육 음악 자율\n화 : 영어 사회 과학 국어 수학 중어 역사\n수 : 역사 영어 스/체 스/체 수학\n목 : 체육 사회 중어 수학 영어 과학 국어\n금 : 사회 국어 과학 수학 미술 영어';
        default:
          return 'invalid';
      } 
    case "7":
      switch(b){
        case "종례":
        case "조례":
          return '고은정선생님\nhttps://zoom.us/j/6064581563?pwd=SmJ3M0lEaFhGMTRsR0NKWkQxbVdOQT09';
        case "시간표":
          return '월 : 영어 과학 음악 체육 수학 중어 자율\n화 : 수학 역사 국어 중어 사회 과학 영어\n수 : 수학 국어 스/과 스/과 체육\n목 : 사회 수학 국어 체육 과학 역사 영어\n금 : 정보 정보 사회 국어 영어 미술';
        default:
          return 'invalid';
      }
    case "8":
      switch(b){
        case "종례":
        case "조례":
          return '곽지영선생님\nhttps://zoom.us/j/2029525829?pwd=dlphNVZCekdMSkdoeFpjSEp1eUF6dz09';
        case "시간표":
          return '월 : 과학 수학 사회 국어 체육 영어 자율\n화 : 과학 정보 정보 수학 역사 영어 국어\n수 : 국어 중어 스/음 스/음 사회\n목 : 영어 체육 과학 역사 중어 국어 수학\n금 : 체육 수학 영어 미술 사회 과학';
        default:
          return 'invalid';
      }
    case "9":
      switch(b){
        case "종례":
        case "조례":
          return '김혜란선생님\nhttps://us04web.zoom.us/j/5415952858?pwd=OUdFeWdCVkZyVzhudmNaVU1CRVZxZz09';
        case "시간표":
          return '월 : 음악 체육 수학 영어 과학 국어 자율\n화 : 역사 수학 영어 사회 과학 국어 중어\n수 : 영어 수학 사회 스포 역사\n목 : 과학 정보 정보 국어 수학 사회 체육\n금 : 영어 중어 미술 체육 과학 국어';
        default:
          return "invalid";
      }      
      default:
        return 'invalid';
  }
}

client.login(token);
