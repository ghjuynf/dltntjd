const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "==";
const token = process.env.token;

client.on("ready", () => {
  console.log("Oh yes");
    client.user.setPresence({
      status: "dnd",
      activity: {
          name: "공포영화는 무서워",
          type: "PLAYING"
      }
    })
});


client.on("message", (msg) => {
  if (msg.author.bot || !msg.content.startsWith(prefix)) return;
  var args = msg.content.slice(prefix.length).trim().split(" ");
  var cmd = args.shift();

  function timeschedule() {
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
  }
  function notCoherent() {
    return msg.channel.send("제대로 된 값 입력 요망");
  }
  switch (cmd.toLowerCase()) {
    case "1반":
    case "1":
     msg.channel.send("현재 비활성화된 반입니다.")
     break;
    case "2반":
    case "2":
      var classNum = 2;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 과학 체육 기술 국어 도덕 영어");
          msg.channel.send("화 : 역사 국어 영어 가정 도덕 과학 수학");
          msg.channel.send("수 : 수학 국어 역사 음악 한문 과학");
          msg.channel.send("목 : 역사 가정 스포 스포 국어 한문");
          msg.channel.send("금 : 미술 과학 체육 수학 기술 영어 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("링크를 이수성에게 보내주세요");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("링크를 이수성에게 보내주세요");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send(
                "https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("박지은선생님");
              msg.channel.send(
                "https://zoom.us/j/6192015808?d=eEZNVnAzOWE1VFYxWU1HdTY2Wmc0QT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("정광영선생님");
              msg.channel.send(
                "링크는 없어요오 ㅠㅠ"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              msg.channel.send("시간 왜 바뀜???");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("박지은선생님");
              msg.channel.send(
                "https://zoom.us/j/6192015808?d=eEZNVnAzOWE1VFYxWU1HdTY2Wmc0QT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              msg.channel.send("외 시간 바뀜??");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("김병욱선생님");
              msg.channel.send(
                "https://zoom.us/j/6369557044?pwd=K2VuclhyQVBBOWdzM1pOeUtQNkdzdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("김병욱선생님");
              msg.channel.send(
                " https://zoom.us/j/6369557044?pwd=K2VuclhyQVBBOWdzM1pOeUtQNkdzdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send("https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("정광영선생님");
              msg.channel.send(
                "링크가 없네요오 흐윽"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send("https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("아몰랑 알아서해");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "3반":
    case "3":
      var classNum = 3;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 국어 역사 한문 음악 영어 가정");
          msg.channel.send("화 : 영어 과학 국어 수학 체육 가정 도덕");
          msg.channel.send("수 : 과학 기술 수학 한문 국어 역사");
          msg.channel.send("목 : 과학 기술 스포 스포 미술 영어");
          msg.channel.send("금 : 수학 도덕 과학 역사 체육 국어 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("김병욱선생님");
              msg.channel.send(
                "https://zoom.us/j/6369557044?pwd=K2VuclhyQVBBOWdzM1pOeUtQNkdzdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              msg.channel.send("시간 왜 바뀜???");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("김향숙선생님");
              msg.channel.send(
                "https://zoom.us/j/3121363871?wd=RnhkNEhZbkpQQmtVOUFSUWd3YzRhZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서영숙선생님");
              msg.channel.send(
                "https://zoom.us/j/9614185109?pwd=eTJsbUpraWhLSE1rNSttZDZlTnR5UT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              msg.channel.send("외 시간 바뀜??");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send("https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("박지은선생님");
              msg.channel.send(
                "https://zoom.us/j/6192015808?d=eEZNVnAzOWE1VFYxWU1HdTY2Wmc0QT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("박지은선생님");
              msg.channel.send(
                "https://zoom.us/j/6192015808?d=eEZNVnAzOWE1VFYxWU1HdTY2Wmc0QT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("송혜경선생님");
              msg.channel.send(
                "https://zoom.us/j/8721927402?pwd=ZnR0REVmWEIvdkV3di9jNWpvSnhMdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send("https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("김병욱선생님");
              msg.channel.send(
                "https://zoom.us/j/6369557044?pwd=K2VuclhyQVBBOWdzM1pOeUtQNkdzdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("아몰랑 알아서해");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "4반":
    case "4":
     msg.channel.send("현재 비활성화된 반입니다.")
    case "5반":
    case "5":
      var classNum = 5;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 도덕 기술 국어 역사 가정 수학");
          msg.channel.send("화 : 한문 역사 도덕 과학 영어 국어 음악");
          msg.channel.send("수 : 한문 수학 과학 기술 영어 체육");
          msg.channel.send("목 : 국어 과학 스포 스포 영어 미술");
          msg.channel.send("금 : 체육 국어 과학 역사 수학 가정 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("임택영선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5645550764?pwd=ZktrdTlzVkZVRG1xWi8wTmFYWXpEQT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("임택영선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5645550764?pwd=ZktrdTlzVkZVRG1xWi8wTmFYWXpEQT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("임택영선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5645550764?pwd=ZktrdTlzVkZVRG1xWi8wTmFYWXpEQT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("임택영선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5645550764?pwd=ZktrdTlzVkZVRG1xWi8wTmFYWXpEQT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              msg.channel.send();
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09"
                )
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("박현진선생님");
              msg.channel.send(
                "https://zoom.us/j/3506754574?pwd=VkRGUnVscVkzNVBvVmJ6YjRqMWZFdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send("https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("이건 나도 못하겠어");
              msg.channel.send("알아서 하렴");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "6반":
    case "6":
      var classNum = 6;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 기술 도덕 역사 국어 과학 체육");
          msg.channel.send("화 : 미술 도덕 국어 과학 수학 영어 한문");
          msg.channel.send("수 : 과학 영어 가정 국어 수학 역사");
          msg.channel.send("목 : 체육 수학 스포 스포 국어 기술");
          msg.channel.send("금 : 가정 과학 영어 한문 역사 음악 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send(
                "https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09                "
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("오세정선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09                "
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send("https://us02web.zoom.us/j/5887735276?pwd=am02akpQaHN1eGpOLzBueC9LYWxKZz09");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send("https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("이건 몰라용");
              msg.channel.send("알아서 해");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "7반":
    case "7":
      var classNum = 7;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 수학 영어 국어 도덕 한문 음악");
          msg.channel.send("화 : 기술 수학 과학 체육 영어 국어 역사");
          msg.channel.send("수 : 역사 한문 영어 가정 국어 과학");
          msg.channel.send("목 : 과학 가정 스포 스포 수학 체육");
          msg.channel.send("금 : 역사 미술 국어 도덕 과학 기술 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("링크를 이수성에게 보내주시면 만들어드림^오^");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("링크를 이수성에게 보내주시면 만들어드림^오^");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send(
                "https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09                "
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send("https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send("https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("아몰랑 알아서 해");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "8반":
    case "8":
      var classNum = 8;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 음악 가정 수학 영어 체육 국어");
          msg.channel.send("화 : 과학 영어 역사 국어 한문 기술 수학");
          msg.channel.send("수 : 영어 도덕 체육 역사 과학 기술");
          msg.channel.send("목 : 수학 국어 스포 스포 역사 과학");
          msg.channel.send("금 : 도덕 국어 가정 과학 한문 미술 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send(
                "https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("엄선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("준선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              msg.channel.send();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("식선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send("https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send("https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09")
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send(
                "https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율임");
              msg.channel.send("이건몰라");
              msg.channel.send("니가 알아서 가 ");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    case "9반":
    case "9":
      var classNum = 9;
      switch (args[0].toLowerCase()) {
        case "시간표":
        case "tlrksvy":
          timeschedule();
          msg.channel.send("월 : 영어 미술 과학 가정 도덕 한문");
          msg.channel.send("화 : 국어 체육 수학 기술 역사 영어 과학");
          msg.channel.send("수 : 국어 역사 과학 도덕 체육 수학");
          msg.channel.send("목 : 역사 한문 스포 스포 음악 국어");
          msg.channel.send("금 : 과학 수학 기술 가정 영어 국어 자율");
          break;
        case "조례":
          morningMeet();
          msg.channel.send("https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09");
          break;
        case "종례":
          afterSchool();
          msg.channel.send("https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09");
          break;
        case "1교시":
        case "1":
          var period = 1;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "2교시":
        case "2":
          var period = 2;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("미술");
              msg.channel.send("김승미선생님");
              msg.channel.send(
                "https://zoom.us/j/6737903648?pwd=blBGd0o5Q3VJTGVhRk14eVNIWHJVdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "3교시":
        case "3":
          var period = 3;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "4교시":
        case "4":
          var period = 4;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("가정");
              msg.channel.send("김명순선생님");
              msg.channel.send(
                "https://zoom.us/j/3035456030?pwd=TDBHK2Z2OE5jdUFNKytFRWM2SGdEUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("스포츠");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("기술");
              msg.channel.send("김길수선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/3251994967?pwd=QVVUR3dYVEZJN2ZXT3U3c1B2OWdqdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "5교시":
        case "5":
          var period = 5;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("도덕");
              msg.channel.send("지인실선생님");
              msg.channel.send(
                "https://zoom.us/j/5796531166?pwd=enErWFYwUCtPL1BRcTZwTE9vWWdMdz09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("역사");
              msg.channel.send("이현아선생님");
              msg.channel.send(
                "https://zoom.us/j/7491082440?pwd=S0djZStMdHNxRzFDenA2dFBuUkdCQT09"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("체육");
              msg.channel.send("진현호선생님");
              msg.channel.send(
                "https://zoom.us/j/4473861954?pwd=aWZ1Y3NidkQvYllzWXc0MCtYNGRVZz09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("음악");
              msg.channel.send("권민수선생님");
              msg.channel.send("https://zoom.us/j/9132661200?pwd=cEx2NVFnRmJmSFRjT2ZhRC95NUR2QT09");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "6교시":
        case "6":
          var period = 6;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              timeTable();
              msg.channel.send("한문");
              msg.channel.send("김정란선생님");
              msg.channel.send(
                "https://zoom.us/j/7632740988?pwd=eCt2eW5PQWs2NzV4STB6ckY2c2hLUT09"
              );
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("영어");
              msg.channel.send("박효진선생님");
              msg.channel.send(
                "https://us02web.zoom.us/j/9583380291?pwd=ZThzQlMzc0ZSMjZITG9kbWt2NGs3UT095"
              );
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              timeTable();
              msg.channel.send("수학");
              msg.channel.send("서수영선생님");
              msg.channel.send(
                "https://zoom.us/j/9157771566?pwd=WHB6OHBURFpmNnZHN3VVbUU2WHFjUT09"
              );
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send("https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09");
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("국어");
              msg.channel.send("차상윤선생님");
              msg.channel.send(
                "https://zoom.us/j/2127649497?pwd=NExWZDJkTFcxbWcyRFBoV3RONXBRdz09"
              );
              break;
            default:
              notCoherent();
              break;
          }
          break;
        case "7교시":
        case "7":
          var period = 7;
          switch (args[1].toLowerCase()) {
            case "월요일":
            case "월":
            case "monday":
            case "mon":
              var day = "월요일";
              doNotExist7th();
              break;
            case "화요일":
            case "화":
            case "tuesday":
            case "tue":
              var day = "화요일";
              timeTable();
              msg.channel.send("과학");
              msg.channel.send("박성연선생님");
              msg.channel.send(
                "https://zoom.us/j/7653343162?pwd=aXVadjA4Q1ZwYXBzbVEwL0tCUjNmdz09"
              );
              msg.channel.send("아 7교시 싫다");
              break;
            case "수요일":
            case "수":
            case "wensday":
            case "wen":
              var day = "수요일";
              doNotExist7th();
              break;
            case "목요일":
            case "목":
            case "thursday":
            case "thu":
              var day = "목요일";
              doNotExist7th();
              break;
            case "금요일":
            case "금":
            case "friday":
            case "fri":
              var day = "금요일";
              timeTable();
              msg.channel.send("자율");
              msg.channel.send("아몰랑알아서해");
              break;
            default:
              notCoherent();
              break;
          }
          break;
        default:
          notCoherent();
          break;
      }
      break;
    default:
      notCoherent();
      break;
  }
});

client.login(token);
