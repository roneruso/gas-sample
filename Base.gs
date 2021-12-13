function myFunction() {
//ダイアログボックス　ブラウザクラス
  // const response01 = Browser.msgBox('メッセージはここ');
  // const response02 = Browser.msgBox('メッセージはここ',Browser.Buttons.OK);
  // const response03 = Browser.msgBox('タイトルはここ','メッセージはここ',Browser.Buttons.OK_CANCEL);

  // console.log(response01);
  // console.log(response02);
  // console.log(response03);

  // console.log(typeof response01);
  // console.log(typeof response02);
  // console.log(typeof response03);

//ダイアログボックス　ブラウザクラス　テキスト入力
  // const response01 = Browser.inputBox('メッセージはここ');
  // const response02 = Browser.inputBox('メッセージはここ',Browser.Buttons.YES_NO);
  // const response03 = Browser.inputBox('タイトルはここ','メッセージはここ',Browser.Buttons.YES_NO_CANCEL);

  // console.log(response01);
  // console.log(response02);
  // console.log(response03);

  // console.log(typeof response01);
  // console.log(typeof response02);
  // console.log(typeof response03);

//ダイアログボックス表示 アラート
  // const ui = SpreadsheetApp.getUi();
  // const response01 = ui.alert('メッセージはここ');
  // const response02 = ui.alert('メッセージはここ',ui.ButtonSet.OK_CANCEL);
  // const response03 = ui.alert('タイトルはここ','メッセージはここ',ui.ButtonSet.YES_NO);
  // Logger.log(response01);
  // Logger.log(response02);
  // Logger.log(response03);
  // console.log(typeof response01);
  // console.log(typeof response02);
  // console.log(typeof response03);


//ダイアログボックス表示　プロンプト　戻り値不明
  // const ui = SpreadsheetApp.getUi();
  // const response01 = ui.prompt('メッセージはここ');
  // const response02 = ui.prompt('メッセージはここ',ui.ButtonSet.OK_CANCEL);
  // const response03 = ui.prompt('タイトルはここ','メッセージはここ',ui.ButtonSet.YES_NO);
  // Logger.log(response01);
  // Logger.log(response02);
  // Logger.log(response03);
  // console.log(typeof response01);
  // console.log(typeof response02);
  // console.log(typeof response03);

//入力されたテキスト取得
// const ui = SpreadsheetApp.getUi()
// const response = ui.prompt('タイトルはここ','メッセージはここ',ui.ButtonSet.OK_CANCEL);
// console.log(response.getResponseText());


//操作したボタン取得
  // const ui = SpreadsheetApp.getUi();
  // const response = ui.prompt('タイトルはここ','メッセージはここ',ui.ButtonSet.YES_NO_CANCEL);
  // Logger.log(response.getSelectedButton());


//オリジナルメニュー作成
  // const ui = SpreadsheetApp.getUi();
  // ui.createMenu('メニュー').addItem('カテゴリ','functionName').addToUi();
  // const menu = ui.createMenu('メニュー').addItem('カテゴリ','functionName').addToUi();
  // console.log(menu);
  // Logger.log(menu);
  // console.log(typeof menu);


//userオブジェクトからメール取得
  // console.log(Session.getActiveUser().getEmail());
  // console.log(typeof Session.getActiveUser().getEmail());


//プロパティ情報取得
  // const scriptProperties = PropertiesService.getScriptProperties();
  // const adminInfo = scriptProperties.getProperties();
  // console.log(adminInfo); // { MAIL: 'ccc', TOKEN: 'bbb', PASS: 'aaa' }
  // console.log(typeof adminInfo); // object


  //設定した全プロパティを取得する
  // const scriptProperties = PropertiesService.getScriptProperties();
  // const data = scriptProperties.getProperties();
  // for (var key in data) {
  //   Logger.log('キー: %s, 値: %s', key, data[key]);
  // }

//プロパティの設定
//  const scriptProperties = PropertiesService.getScriptProperties();
//  scriptProperties.setProperty('FugaFuga','ああ');

//  const scriptProperties = PropertiesService.getScriptProperties();
// 　scriptProperties.setProperties({
//     'Fuga1': 'あ',
//     'Fuga2': 'い',
//     'Fuga3': 'う'
//   });


//指定したプロパティの取得
  // const scriptProperties = PropertiesService.getScriptProperties();
  // const token = scriptProperties.getProperty('TOKEN');
  // const nothing = scriptProperties.getProperty('NULL');
  // console.log(token);
  // console.log(nothing);

//タイマー開始停止の計測
  // const timer = 'スクリプト実行時間';
  // console.time(timer);
  // Utilities.sleep(5000);
  // console.timeEnd(timer);

//ログ出力
  // const number = 3;
  // Logger.log(number);
  // console.log(number);

  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  // Logger.log(ss);
  // console.log(ss);
  // const object = {'key01': 'value01', 'key02': 'value02'};
  // Logger.log(object);
  // console.log(object);

//シートpdf変換
  // const ss = SpreadsheetApp.getActiveSpreadsheet();
  // const blob = ss.getAs("application/pdf");
  // console.log(blob.getContentType());
  // console.log(blob.getName());
  // blob.setName('testPdf.pdf');
  // console.log(blob.getName());

//blobの名前設定
// const ss = SpreadsheetApp.getActiveSpreadsheet();
// const blob = ss.getAs("application/pdf");
// console.log(blob.getContentType());
// console.log(blob.getName());
// blob.setName('testPdf.pdf');
// console.log(blob.getName());

//ロックを開放
  // const docLock = LockService.getDocumentLock();
  // if (docLock.tryLock(1000)){
  //   const ss = SpreadsheetApp.getActiveSpreadsheet();
  //   const sh = ss.getActiveSheet();
  //   const rng = sh.getRange('A1').setValue('ロック中');
  //   SpreadsheetApp.flush();
  //   Utilities.sleep(10000);
  //   docLock.releaseLock();
  //   rng.setValue('ロック終了');
  // } else {
  //   Browser.msgBox('現在ロックされています')
  // }

//スクリプト一時停止
  // Utilities.sleep(3000);


//日付
  // const now = new Date();
  // console.log(now);
  // console.log(typeof now);
  // const formatDate01 = Utilities.formatDate(now, 'JST','yyyy/MM/dd(E) hh:mm:ss');
  // const formatDate02 = Utilities.formatDate(now, 'JST','yyyy/MM/dd(E) HH:mm:ss');
  // const formatDate03 = Utilities.formatDate(now, 'JST','yyyy年MM月dd日 HH時mm分ss秒');
  // console.log(formatDate01);
  // console.log(formatDate02);
  // console.log(formatDate03);


//CSV生成
  // const csv = 'name,age,faverite\nTaro,29,apple';
  // const Blob = Utilities.newBlob(csv,MimeType.CSV,'sample.csv');

  // console.log(Blob);
  // Logger.log(Blob);
  // console.log(Blob.getContentType());
  // console.log(typeof Blob);





//トリガー作成
  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth();
  // const day = today.getDate();
  // const hour = '18';
  // const minute = '00';
  // const setTime = new Date(year, month, day, hour, minute);
  // console.log(setTime);
  // ScriptApp.newTrigger('sampleFunction').timeBased().at(setTime).create();
  // function sampleFunction(){
  // }


//トリガー削除
  // const triggers = ScriptApp.getProjectTriggers();
  // for(const trigger of triggers){
  //   if(trigger.getHandlerFunction() === 'sampleFunction'){
  //     ScriptApp.deleteTrigger(trigger);
  //   }
  // }

  //HTTPレスポンス取得
  // const url = 'https://ms-rpa.jp';
  // const response = UrlFetchApp.fetch(url);
  // console.log(response.getHeaders());
  // console.log(response.getResponseCode());
  // console.log(response.getContentText().slice(0,1000));

  //WEBからの取得、メールにPDF送付
  // const url = 'http://ms-rpa.sakura.ne.jp/files/sbms_service_2020.pdf';
  // const response = UrlFetchApp.fetch(url);
  // const blob = response.getBlob();
  // console.log(blob.getName());
  // console.log(blob.getContentType());
  // const myMail = Session.getActiveUser().getEmail();
  // GmailApp.sendEmail(myMail, 'PDF取得テスト','PDFファイルを確認ください',{attachments: [blob]})

//引数無しインスタンス化
  //const today = new Date();
  //console.log(today);
  //console.log(typeof today);

//特定日時の取得
  // const meetingDate = new Date('2021/08/10 13:00:00');
  // const birthday = new Date('1990','11','11');
  // const eventDate = new Date('2021','9','20','14','30');
  // console.log(meetingDate);
  // console.log(birthday);
  // console.log(eventDate);


//日の取得
  // const today = new Date();
  // const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
  // const endDayOflastMonth = new Date(today.getFullYear(),today.getMonth(), 0);
  // const firstDayOfNextMonth = new Date(today.getFullYear(),today.getMonth() + 1,1);
  // const endDay = new Date(today.getFullYear(),today.getMonth()+1,0);
  // console.log(firstDay);
  // console.log(endDayOflastMonth);
  // console.log(firstDayOfNextMonth);
  // console.log(endDay);

//n日後の取得
  // const today01 = new Date();
  // const _yesterday = new Date(today01.setDate(today01.getDate() - 1));
  // const yesterday = Utilities.formatDate(_yesterday,'JST','yyyy/MM/dd');
  // const today02 = new Date();
  // const _tomorrow = new Date(today02.setDate(today02.getDate() + 1));
  // const tomorrow = Utilities.formatDate(_tomorrow,'JST','yyyy/MM/dd');
  // console.log(yesterday);
  // console.log(tomorrow);


//どようびの判定
  // const date01 = new Date('2020/05/09');
  // const date02 = new Date('2020/05/10');
  // const date03 = new Date('2020/05/11');

  // console.log(date01.getDay());
  // console.log(date02.getDay());
  // console.log(date03.getDay());

  //特定文字列検索
  // const string = 'This is an apple';
  // console.log(string.indexOf('apple'));
  // console.log(string.includes('apple'));
  // console.log(string.indexOf('bananna'));
  // console.log(string.includes('bananna'));

//0埋め処理
  // const targetString = '123';
  // const numOfDigits = 10;
  // console.log(targetString.padStart(numOfDigits));
  // console.log(targetString.padStart(numOfDigits, '0'));

















}
