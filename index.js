const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "==";
var token = process.env.token;

client.on("ready", () => {
  console.log("Oh yes");
    client.user.setPresence({
      status: "dnd",
      activity: {
          name: "반 추가하고 싶으신분은 이쑤썽#8029으로 자기반 줌 링크 보내주세여",
          type: "PLAYING"
      }
    })
});

date = ["월", "화", "수", "목", "금", "토", "일"] //부가 어레이
function tt(a, b, c) {
    if (First_Nogada(a, b, c) == "invalid") {
        return "Invalid argument."
    }
    return `${a}반 ${date[b-1]}요일 ${c}교시 수업\n${First_Nogada(a, b, c)}\n${Second_Nogada(a, b, c)}\n${Third_Nogada(a, b, c)}`
}

client.on('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(prefix)) return; 
  var args = msg.content.slice(prefix.length).trim().split(' ');
  var cmd = args.shift(); 
  msg.channel.send(tt(cmd, args[0], args[1]));
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
          case "월":
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
                  return "스포3";
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
                  return "스포3";
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
                  return "스포3";
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

  function Second_Nogada(a, b, c){
    switch(First_Nogada(a, b, c)){
      case "국어":
        return '1,2,3반 = 안현아선생님, 6,8,9반 = 강현주선생님';
      case "수학":
        return '1,2,3반 = 김병재선생님, 6,8,9반 = 이준서선생님';
      case "과학":
        return '1,2,3반 = 김시용선생님, 6,8,9반 = 김향숙선생님';
      case "사회":
        return '1,2,3반 = 서진화선생님, 6,8,9반 = 곽지영선생님';
      case "역사":
        return '1,2,3,6,8,9반 = 송혜경선생님';
      case "영어":
        return '1,2,3반 = 강지현선생님, 6,8,9반 = 윤혜진선생님';
      case "음악":
        return '1,2,3,6,8,9반 = 권민수선생님';
      case "자율":
        return 'free';
      case "미술":
        return '1,2,3반 = 김승미선생님, 6,8,9반 = 민솔선생님';
      case "정보":
        return '1,2,3,6,8,9반 = 김혜란선생님';
      case "중어":
        return '1,2,3,6,8,9반 = 고은정선생님';
      case "체육":
        return '1,2,3반 = 진현호선생님, 6반 = 이상윤선생님, 8,9반 = 홍영상선생님';
      default:
        return "invalid";
    }
  }

  function Third_Nogada(a, b, c){
    switch(Second_Nogada(a, b, c)){
      case "1,2,3반 = 안현아선생님, 6,8,9반 = 강현주선생님":
        return 'https://zoom.us/j/7094608456?pwd=cGtQU3NqK3lmOUd0OFpPUldHNnc1UT09 \n // https://zoom.us/j/9990031320?pwd=Q01IaVJYeHBRUjBWbHptemp1dGFnQT09';
      case "1,2,3반 = 김병재선생님, 6,8,9반 = 이준서선생님":
        return 'https://zoom.us/j/7594714613?pwd=UEFQTE01SFZRYWcxYUhPS05NOFZZUT09 \n // https://us02web.zoom.us/j/8687258653?pwd=Q0ZzclJUVVRkaGI0Z2x4R3ZrNXdxQT09';
      case "1,2,3반 = 김시용선생님, 6,8,9반 = 김향숙선생님":
        return 'https://us02web.zoom.us/j/2521617249?pwd=bkRkVkVha2Jrb3JQNVFrNnFNNVNyUT09 \n // https://zoom.us/j/3121363871?pwd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09';
      case "1,2,3반 = 서진화선생님, 6,8,9반 = 곽지영선생님":
        return 'https://zoom.us/j/4282444812?pwd=NjZDekViWlJjREpiR0t0dkIwaC9wdz09 \n // https://zoom.us/j/2029525829?pwd=dlphNVZCekdMSkdoeFpjSEp1eUF6dz09';
      case "1,2,3,6,8,9반 = 송혜경선생님":
        return 'https://zoom.us/j/8721927402?pwd=cTJyKzBQUXRMb3owNFU1bkM1VllrUT09';
      case "1,2,3반 = 강지현선생님, 6,8,9반 = 윤혜진선생님":
        return 'https://zoom.us/j/6297632473?pwd=dmI0aEVZc3N1Q29lejVjU1dqTGt0Zz09 \n // https://zoom.us/j/3553534243?pwd=RkNWSWNKT000d2ZWNHpwZE9sang0QT09';
      case "1,2,3,6,8,9반 = 권민수선생님":
        return 'https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09';
      case "1,2,3반 = 김승미선생님, 6,8,9반 = 민솔선생님":
        return 'https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09 \n // https://us02web.zoom.us/j/3071954981?pwd=dXhMZkk2eE9LbkR3eHpuQnoxNUx1dz09';
      case "1,2,3,6,8,9반 = 김혜란선생님":
        return 'https://us04web.zoom.us/j/5415952858?pwd=OUdFeWdCVkZyVzhudmNaVU1CRVZxZz09';
      case "1,2,3,6,8,9반 = 고은정선생님":
        return 'https://zoom.us/j/6064581563?pwd=SmJ3M0lEaFhGMTRsR0NKWkQxbVdOQT09';
      case "1,2,3반 = 진현호선생님, 6반 = 이상윤선생님, 8,9반 = 홍영상선생님":
        return 'https://zoom.us/j/4473861954?pwd=NFRwaHZQVTNaU3YwVTRvcjBZQUJaQT09 \n // https://zoom.us/j/4465173047?pwd=dnpvUnE4MkF0YlFBMFpHMTE4ZFQ5UT09 \n // https://zoom.us/j/5810363056?pwd=UkhTV3BZRmt6RHhRcTl6OFp1a1pSUT09';
      case "free":
        return '자율시간입니다. 자세한건 담임선생님 공지를 따라주세요.';
      default:
        return "invalid";
    }
  }
  client.login(token);
 
