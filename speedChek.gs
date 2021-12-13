function myFunction2() {
//  const ss = SpreadsheetApp.getActiveSpreadsheet();
//  console.log(ss);
//  Logger.log(ss);
//  console.log(ss.getName());


//  const ss= SpreadsheetApp.openById(
//    '158r56cy5_ctlUHiYw4t5otIPnTEwIeThEhS2PWbQqOM');
//    console.log(ss.getName());


//  SpreadsheetApp.getUi();


//  const sh = ss.getActiveSheet();
//  console.log(sh.getName());

//  const sh = ss.getSheetByName('シート1');
//  console.log(sh.getName());

//  const sh = ss.getSheets()[1];
//  const gid = sh.getSheetId();
//  console.log(gid);

//  console.log(ss.getName());
//  const sh = ss.getActiveSheet();
//  console.log(sh.getName());

//  const sh = ss.getSheets()[0];
//  console.log(sh.getSheetName());

//  const sh = ss.getActiveSheet();
//  console.log(sh.getRange(1,1));
//  console.log(sh.getRange(1,1,2,2));
// Logger.log(sh.getRange(1,1));
//  Logger.log(sh.getRange(1,1,2,2));
//  console.log(sh.getRange(1,1).getA1Notation());
//  console.log(sh.getRange(1,1,2,2).getA1Notation());
  


//  const sh = ss.getActiveSheet();
//  console.log(sh.getRange('A1'));
//  console.log(sh.getRange('A1:B2'));
//  Logger.log(sh.getRange('A1'));
//  Logger.log(sh.getRange('A1:B2'));

//  const sh = ss.getActiveSheet();
//  const lastRow = sh.getLastRow();
//  console.log(lastRow);

//  const sh = ss.getActiveSheet();
//  const lastRowB = sh.getRange(1,2).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
//  console.log(lastRowB);
//  const lastRowC = sh.getRange(sh.getMaxRows(), 2).getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
//  console.log(lastRowC);


//  const rng = sh.getDataRange();
//  console.log(rng);
//  Logger.log(rng);
//  console.log(rng.getA1Notation());


//}

// function speedCheck() {
//   myFunctionCase01()
//   myFunctionCase02()
// }
// function myFunctionCase01(){
//   const keyword = 'テスト書き込み';
//   const sh = SpreadsheetApp.getActiveSheet();
//   const rows = sh.getMaxRows();

//   sh.clear();
//   const timer = '1セル単位の書き込み';
//   console.time(timer);
//   for(let i = 1; i <= rows; i++) {
//     sh.getRange(i,1).setValue(keyword);
//   }
//   console.timeEnd(timer);
// }

// function myFunctionCase02(){
//   const keyword = 'テスト書き込み';
//   const sh = SpreadsheetApp.getActiveSheet();
//   const rows = sh.getMaxRows();

//   sh.clear();
//   const timer2 = 'まとめた書き込み';
//   console.time(timer2);
//   const keywords = [];
//   for(let i = 1; i <=rows; i++){
//     keywords.push([[keyword]])
//   }
//   sh.getRange(1,1,keywords.length,keywords[0].length).setValues(keywords);
//   console.timeEnd(timer2);
// }

  // const sh = ss.getSheets()[0];
  // const rng = sh.getRange(1,1,2,2);
  // console.log(rng.getA1Notation());

  // console.log(ss.getUrl());



//めーるの送信
// const to = 'turnjustup@gmail.com';
// const subject = '件名';
// const textBody = 'htmlメールの取得に失敗しました';
// const cc = 'turnjustup@gmail.com';
// const bcc = 'turnjustup@gmail.com';
// const htmlBody = HtmlService.createHtmlOutputFromFile('htmlbody').getContent();
// const fromName = 'Manabu Gas!!';
// GmailApp.sendEmail(to,subject,textBody, {
//   cc : cc,
//   bcc : bcc,
//   htmlBody: htmlBody,
//   name : fromName
// });


// メールの検索 条件：アドレスと期間
  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  // const sh = ss.getSheetByName('シート2');
  // const threads = GmailApp.search('from:(turnjustup@gmail.com) after:2020/4/25 before:2021/4/30');

  // let row = 1;
  // for(let i in threads){
  //   const thread = threads[i];
  //   const messages = thread.getMessages();
  //   for(let j in messages){
  //     const message = messages[j];
  //     const date = message.getDate();
  //     const subject = message.getSubject();
  //     sh.getRange(row,1).setValue(date);
  //     sh.getRange(row,2).setValue(subject);
  //     row++;
  //   }
  // }
//メールをすれっどごと取得
//GmailApp.getMessagesForThread(threads);


//メールの下書き作成
  // const to = 'turnjustup@gmail.com';
  // const subject = '件名';
  // const textbody = 'htmlメールの取得に失敗しました';
  // const cc = 'turnjustup@gmail.com';
  // const bcc = 'turnjustup@gmail.com';
  // const htmlBody = HtmlService.createHtmlOutputFromFile('htmlbody').getContent();
  // const fromName = 'Manabu Gas';
  // GmailApp.createDraft(to,subject,textbody,{
  //   cc :cc,
  //   bcc : bcc,
  //   htmlBody : htmlBody,
  //   name : fromName
  // });

// メール検索　条件：単語
  // const subject = 'お問い合わせありがとうございます。';
  // const thread = GmailApp.search(subject,0,10);
  // const message = GmailApp.getMessagesForThreads(thread);

  // let values = [];

  // for(let i = 0; i <message.length; i++){
  //   for(let j=0;j <message[i].length;j++){
  //     const date = message[i][j].getDate();
  //     const from = message[i][j].getFrom();
  //     const subj = message[i][j].getSubject();
  //     const body = message[i][j].getPlainBody();
  //     const perm = thread[i].getPermalink();
  //     values.push([date,from,subj,body,perm]);
  //   }
  // }

  // if(values.length > 0){
  //   const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
  //   sheet.getRange(1,1,values.length, values[0].length).setValues(values);
  // }


  // const calendar = CalendarApp.getDefaultCalendar();
  // const name = calendar.getName();
  // console.log(name);

  // const calendar = CalendarApp.getCalendarById('turnjustup@gmail.com');
  // const name = calendar.getName();
  // console.log(name);

//カレンダー画面の色
  // const color = '#2952A3';
  // CalendarApp.setColor(color);


//カレンダー画面イベント登録
  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  // const sh = ss.getActiveSheet();
  // const calendar = CalendarApp.getDefaultCalendar();
  // const title = sh.getRange('A1').getValue();
  // const startTime = sh.getRange('A2').getValue();
  // const endTime = sh.getRange('A3').getValue();
  // const body = sh.getRange('A4').getValue();
  // const room = sh.getRange('A5').getValue();
  // const guest = sh.getRange('A6').getValue();

  // calendar.createEvent(title,startTime,endTime,{
  //   description : body,
  //   location : room,
  //   guests : guest,
  //   sendInvites : true
  // });

// 終日予定登録
  // const calendar = CalendarApp.getDefaultCalendar();
  // const title = '会議有り';
  // const date = new Date('2021/11/25');
  // calendar.createAllDayEvent(title,date);

// ポップリマインダー登録
  // const calendar = CalendarApp.getDefaultCalendar();
  // const title = '会議有り';
  // const date = new Date('2021/11/25');
  // const eventObject = calendar.createAllDayEvent(title,date);

  // eventObject.setGuestsCanSeeGuests(false);
  // eventObject.removeAllReminders();
  // eventObject.addPopupReminder(120);


//イベントIDの取得
//  const date = new Date('2021/11/25');
//  const calendar = CalendarApp.getDefaultCalendar();
//  const events = calendar.getEventsForDay(date);
//  for(let i in events){
//    const id = events[i].getId();
//    console.log(id);
//    const event = CalendarApp.getEventById(id);
//    console.log(event.getTitle());
//  }


//イベントの削除
  // const calendar = CalendarApp.getDefaultCalendar();
  // const date = new Date('2021/11/25');
  // const events = calendar.getEventsForDay(date);
  // for(let i in events){
  //   const event = events[i];
  //   event.deleteEvent();
  // }

//スライド取得
//  const url = 'https://docs.google.com/presentation/d/1pCgNLgyUuGthX8OOT3NkkD0JFjxQZJ8fDZfT-e3745M/edit#slide=id.p';
//  const name = SlidesApp.openByUrl(url);
//  console.log(name.getName());

//スライドグラフの更新
  // const id = "1pCgNLgyUuGthX8OOT3NkkD0JFjxQZJ8fDZfT-e3745M";
  // const presentation = SlidesApp.openById(id);
  // const slides = presentation.getSlides();
  // console.log(slides.length);
  // for(let i = 0; i < slides.length; i++){
  //   const slide = slides[i]
  //   const charts = slide.getSheetsCharts();
  //   for(let j = 0; j <charts.length;j++){
  //     charts[j].refresh();
  //   }
  // }
}
