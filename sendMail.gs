function sendMessage() {
 
  const recipient = 'turnjustup@gmail.com'; //承認者のメールアドレス
  const subject = '備品購入申請のお知らせ';
  let body = '';
  body += '備品購入申請がありましたので\n';
  body += '以下URLからスプレッドシートをご覧ください\n';
  body += 'https://docs.google.com/spreadsheets/d/158r56cy5_ctlUHiYw4t5otIPnTEwIeThEhS2PWbQqOM/edit#gid=0'; //スプレッドシートのURL
  GmailApp.sendEmail(recipient, subject, body);
 
}


function sendMessage(e) {
   
  const [timeStamp, email, shop, item, price, amount] = e.values;
  const total = price * amount;
  const row = e.range.getRow();
  const recipient = 'turnjustup@gmail.com'; //送信先メールアドレス    
  const subject = '備品購入申請のお知らせ';
  let body = '';
  body += '備品購入申請がありました。\n\n';
  body += `・購買先: ${shop}\n`;
  body += `・品名: ${item}\n`;
  body += `・単価: ${price} 円\n`;
  body += `・数量: ${amount}\n`;
  body += `・総額: ${total} 円\n\n`;  
  body += '以下URLをクリックしてみてください\n';
  body += 'https://script.google.com/macros/s/AKfycbxeNTInfBax3PblebDk517mOIvgNHLYIXv5Qhc09REuQFy8RuBA/exec'; //公開したウェブアプリケーションのURL
  body += `?row=${row}`;
 
  GmailApp.sendEmail(recipient, subject, body);
 
}

function doGet(e) {
  let html = '';
  html += '<h1>備品購入申請のお知らせ</h1>';
  html += '<p>あなたは備品購入申請のメールのリンクを踏みました</p>';
  html += `<p>パラメータrow: ${e.parameter.row}</p>`;
  return HtmlService.createHtmlOutput(html);
}
