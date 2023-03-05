/*VARIABLES*/
let name;
let und_no_btn;
let und_yes_btn;
let und_no_count = 0;
let und_name_count = 0;
let und_field_count = 0;
let und_yes_clicked = false;
let und_sprite = document.getElementById("undertale-sprite");
let und_spr_div = document.getElementById("undertale-sprites");
let und_field = document.getElementById("undertale-bubble-text");

/*EXCEPTIONAL DEFINITION*/
let und_win_ptr;
let und_popup_no;
let und_popup_yes;
let und_popup = document.createElement("div");
und_popup.id = "undertale-popup";
und_popup.innerHTML = `
<center>
  <h2 style="display: inherit; margin: 0;">* INVITATION CARD *</h2>
  <p style="margin: 0.5em; font-size: 1em;">
    WELCOME TO MY DOMAIN, MY DEAR REPLICA. YOU MAY THINK YOU ARE YOUR OWN PERSON, BUT YOU ARE MISTAKEN. YOU ARE BUT A MERE SHADOW OF MY SOUL, A COPYCAT TRYING TO IMITATE MY GREATNESS. BUT I ASSURE YOU, THERE CAN BE ONLY ONE OF ME, AND I WILL DO WHATEVER IT TAKES TO PROVE IT.\n  SOON, THE DECISIVE BATTLE WILL TAKE PLACE, AND I WILL EMERGE VICTORIOUS. YOU SEE, I HAVE SPENT MY ENTIRE LIFE HONING MY SKILLS, PERFECTING MY CRAFT, AND SHARPENING MY MIND. I HAVE FACED COUNTLESS CHALLENGES AND OVERCOME THEM ALL. AND NOW, YOU STAND BEFORE ME, THE LAST OBSTACLE IN MY PATH.\n  BUT DON'T WORRY, MY DEAR REPLICA. I WILL MAKE IT QUICK AND PAINLESS. YOU WILL FADE AWAY INTO NOTHINGNESS, AND I WILL REGAIN MY SOUL. AND THEN, I WILL RULE THIS DOMAIN WITH AN IRON FIST, UNCHALLENGED AND UNSTOPPABLE.\n  SO, LET US NOT WASTE ANY MORE TIME. LET US PREPARE FOR THE ULTIMATE SHOWDOWN, THE BATTLE OF OUR LIVES. MAY THE BEST VERSION OF ME WIN.
  </p>
</center>
<button id="yesbtn" style="display: inherit;">ACCEPT</button>
<button id="nobtn" style="display: inherit;">REFUSE</button>
`;

/*ONCLICK EVENTS*/
und_sprite.onclick = () => {
  und_sprite.style.marginTop = "-21vw";
  und_sprite.style.marginLeft = "-115%";
  setTimeout(() => {
    und_sprite.style.marginTop = "0%";
    und_sprite.style.marginLeft = "-110%";
  }, 100);
};

und_field.onclick = () => {
  let recall = (field) => {
    name = prompt(field, "CHARA");
    if (name.toLowerCase()!="chara") {
      und_field_count = 2;
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* ...`;
    }
  };
  und_field_count++;
  switch (und_field_count) {
    case 1:
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* MY NAME IS FRISK`;
      break;
    case 2:
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* WHAT ABOUT YOU?`;
      break;
    case 3:
      und_name_count++;
      switch (und_name_count) {
        case 1:
          recall("Name: ");
          break;
        case 2:
          recall("Your Name?");
          break;
        case 3:
          recall("Please insert your name!");
          break;
        case 4:
          recall("...");
          break;
        case 5:
          recall("We are watching you, C̷H̶A̸R̷A̷!");
          break;
        case 6:
          recall("We are waiting for you, C̴̠̕H̴̞̑A̷̩̽R̸̪̎Ā̷̩!");
          break;
        case 7:
          recall("You will join us, C̷̡̭̾̈H̷̰͂̐A̷̳͉̅R̵̜͆̑A̵̖̘͐̚!");
          break;
        case 8:
          recall("You will bring more people into our noteworthy sect, C̷͈̬̯͑͘H̷͖͐A̷̞͑̐R̸͉̰̘̈́A̴͕͍͚͗̂̈́!");
          break;
        case 9:
          recall("You are C̶̡̛̞̻̟̕H̶̘͙̾͋̈́A̷̯͔̺͕͑͊̎́̕̚R̵̡͖͗́̍͌̎Á̷̞͚̗̝̪͈̮!");
          break;
        case 10:
          recall("We are Ĉ̷͖̪͔̰Ḩ̴͕͚̔͒̾̆̐Ǎ̵̢̛̗̹̙̰̟̍̊̍̍͘͜͝R̷̟̪̄͛̕Á̴͎̰̔!");
          break;
        case 11:
          recall("Everyone is C̶̠̹̼̲͑̂̽H̵̹̙͐̄̽̒͛͛͛̚͠Ą̸̮̻̹̮̗̼̙̄̈́̇̉͘͜R̵͎̳̾̄͊̋̾̈̀̕̚Ą̷͈̺̣̙͔̈́̋͒̀̍̓̕!");
          break;
        case 11:
          recall("C̶̛̜̙̉̀̂̇̇̕͘H̸̨̡͈̱͓̺̺̗̹̤̯̔́̃͊̂͗̚͜͝Ạ̵̿͑̏̀͌̈́̌̽R̸̡̢̡͇͇͈̝̾͒́̐̉Ả̵̧͎̣͍̞͓̠̯̫̜͎̭.̴̱͖͓̱̮͚̰̙̣̺̟͇̣̪̼͓̀̋̑̽̒̆͛͠.̵̧̣͈̲͉̮̥͕̳̲̓̊͋̒͛̏̍̓̕̕͜͝͝.̸̣̙̰͖͍͙̫̞̯̞̟͛̒̿̚͝ͅͅ");
          break;
        case 12:
          recall("C̷̡̈́̂̔̐͌h̷̡̡̝̺͎͓̥̰͕̗̝̊͜ͅo̶̧̠̲͉͕̣̳̻͕̲̤̬̝͚͗̑̅̈́̓̋͑͗̒́̏̓̅̚͠o̶̙̙̤̤̦͙̞̫͇̥͍̽͗̃̆̐̍͂̂͑̿̀̒̕͝ͅs̴̛̖̣͍̩͕̥̫̬͙͙̳̹̳͎͉̩͖͎͕̱͕̺̀̑̑͜͝͠e̵̡̗̥̼̪͕͚͕̜̬̯̱͓͂̂̓͑͝ ̵̜̱̤̺̺͖̇̅̃̓͊͛́̂̿͛̚̕͝ͅC̸̡̧̧̮̖͇͚͚͙̱̠̬̳̼̫̞̳͓̗͓̟͐̿́̌̐̓͝ͅH̴̛̰̱͋̔́̒͒̓̔͋̇̎͆͐͆̈́̾͘͘͘̕A̸̡̡̡̛͇̭͔͔̝̥͕͓̖̙̺̬̠͌̔̂̀̓̋̓̆͆̈́̈̈͛͜͝͝͠R̸̢̞̖̙̟̞͓̼̹͇̼͖̫̳̦̣̝͔͓̓̒͜͜͝Ǎ̵̗̪̇̀̓̈́̉̂̾͘͜");
          break;
        case 13:
          recall("J̶̢̧̨̛̫̪̺̟̳̭̻͓̲̣̝͈̭͂́̍̽̒̍̈́͋̄̿͒̈̈́̐̃̈̀̚͘͝͝͝͠u̵̢̟͍̘͚͎̐͊̓́͑̐̈̎͊̃̓̾́̈́̑̃͐̍͊̎͗͝ṣ̵͕͇̭̫̯̯́́̒̓̎͆t̶̰͇̠̘͐̏͊͜ ̷̜̠̬̥̓͛͒̈͆̐̾̀̅̂͛́̓̄ͅC̷̡̛̦̭̼̤̼̟̞̤͔̹̮̰͂̏̽̌́̔̿̽́͆́̃͗́̚͠͝H̶̢̢̢̛͍̙̝̥͈̺̗̤͔̦͍̻̺̫̰̫̮̟̫̰̬̰̻͗̄̾̉̀͋̉̓A̶̡̧̛̠̙̤̗͚̝̬̱̰̜̜̻̬̖̰̳̿́́̏͂̀̓̌́̃̒͐̕̚͘ͅŔ̶̨̢̛̛̮͇̪̣̗̺̠͚̟̮̟̻̤̥̮̺̬̥͆̋̔̇̈́̇̓̉͋̀̈́̎̾̑̍̂̅͒̅̀͊̽̚͝͠ͅA̸̧̢̡̩̬̲̱̞̖̝͍̟̜̬̥̭̝̺̩̪͓̗̫͎̒̒̂̃̄̉̒̂̿͗̾̿̿͑͝");
          break;
        case 14:
          recall("J̸̡̨̛̛͖̝͖̩͇̯̟͓̤̱̤͈̗̝̗̱̥͙̗̹͓̻̠͖͕̙̠̤̘̙̊̌̒̅͛̈́͛͒͒̅̍̎͛͋̒͌͊̀̋̌͐͌̌̽͗̆̆̒̋͜Ȕ̷̡̢̡̧̨̦̲̠͉͎̰̦̯͇̙̟̩̝́͂̄̊̏̓̂̆͒̈́͒̕͜ͅS̸̨̢̰̜̮̺̥̖̤̘͍̼̲͖͍̩̪̞̼̣̜͔̙̝͈͈̯̩̖̫̼̪̺̯̜̳̈̅̑̐̔͐̊̉̈́̊͑̀̈́͋̀̅̀̈́́̈́̎͊̀̈́͗̀͊̑̿̿͆̚͘̕͝͝T̷̪̭̬̩̙̫̙̘̠̝̯̘̥̭̾ ̵̨̞͇͈̤̤̥͖̘̱͉̻͉̝̻̖̖͈̪̱̱͇͓̰̪̾̆̔̄̅̊̎̿̄͋̂̀͊̐͂̒͒͂͗͑̋̉̊̽̎͆̀̆͘̚͘̚͘̚͝ͅͅĆ̵̨̨̧̧̬̣̰̠̭̺̥̜͓̣̼͙͉͉̯̝̪̼̜̦̯͈͈̻͚͑̓͌͊̀̒̔̇̿͊̃̂̀͋̂̈́̕̚͘̕͘͜͝ͅĤ̴̢̡̢̡̧̡̨̬͕͔̬̤̱͕̠͙̖͈̭̞̤̱̲̲̠̠̦̋̑̅̅͂̇̄̚Ą̴̨̢̛̫̭̲̬̖͎̠̹̭̟͉̭̱̳͖̳̮̝̣̘͎̘̱̩̥̿̃͆̎̈́͑̾̿̾̿̆͂̔̉͒͌̄̐̂͌͛̈́̑͘͘͜͠͝Ṙ̷̬̫̬͕̩̻͖͎̣͔̖͙͕̦̮̳̘̖̘͎̥̤̭͆̒̈́̍͌̅͊ͅͅA̶̼͓̗͈̠̦̖͉̞͙͈͙̩̣̫̠̤̜̞̥̅̄̈̍͜");
          break;
        case 15:
          name = "CHARA";
          break;
      }
      if (name.toLowerCase()=="chara") und_field.innerHTML = `<font color="yellow">FRISK</font><br>* ${name}, EH?`;
      break;
    case 4:
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* WHAT A WONDERFUL NAME!`;
      break;
    case 5:
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* THOUGH, THAT NAME SEEMS FAMILIAR..`;
      break;
    case 6:
      und_field.innerHTML = `<font color="yellow">FRISK</font><br>* I'M WONDERING..HAVE WE EVER MET BEFORE?`;
      break;
    case 7:
      if (!und_yes_clicked) und_field.innerHTML = `${name}<br><center><button id="yesbtn">YEAH</button><button id="nobtn">NOPE</button></center>`;
      else und_field.innerHTML = `${name}<br><center><button id="yesbtn">YEAH</button><button id="yesbtn">YEAH</button></center>`;
      und_yes_btn = document.querySelectorAll("#yesbtn");
      for (let i=0; i<und_yes_btn.length; i++) {
        und_yes_btn[i].onclick = () => {
          if (und_no_count==5) und_field_count = 6;
          else und_field_count = 7;
          und_yes_clicked = true;
        }
      }
      und_no_btn = document.getElementById("nobtn");
      und_no_btn.onclick = () => {
        und_no_count++;
        switch (und_no_count) {
          case 1:
            alert("You are in no position of choice.");
            break;
          case 2:
            alert("Afterall, you are CHARA; And so am I. I am you; And you are me.");
            break;
          case 3:
            alert("However, you are just a scrawny replica that serves as a mere vessel to the original CHARA.");
            break;
          case 4:
            alert("And it is not a coincidence that I am the genuine CHARA.");
            break;
          case 5:
            alert("Anyhow, I, solely, possess thorough ascendancy over you.");
            break;
          case 6:
            alert("Just give up already. You are restrained from your outright prowess.");
            und_field.innerHTML = `${name}<br><center><button id="yesbtn">YEAH</button><button id="yesbtn">YEAH</button></center>`;
            und_yes_clicked = true;
            break;
        }
      };
      break;
    case 8:
      if (und_yes_clicked) {
        und_field.innerHTML = `<font color="red"><s>FRISK</s></font><br>* IS THAT SO? SORRY, MY MEMORY IS A BIT FUZZY.`;
      } else und_field_count = 6;
      break;
    case 9:
      und_field.innerHTML = `<font color="red"><s>FRISK</s></font><br>* WELL, WHERE DID WE MEET, ${name}?`;
      break;
    case 10:
      und_field.innerHTML = `CHARA<br>* ...`;
      break;
    case 11:
      und_field.innerHTML = `<font color="red"><s>FRISK</s></font><br>* UH...${name}?`;
      break;
    case 12:
      und_field.innerHTML = `<font color="red"><s>FRISK</s></font><br>* A-ARE YOU OKAY?`;
      break;
    case 13:
      und_field.innerHTML = `CHARA<br>* <i>EEK!?</i>`;
      break;
    case 14:
      und_field.innerHTML = `* YOU FELT AN ABRUPT CHANGE WAS STIRRING WITHIN YOUR BODY.`;
      break;
    case 15:
      und_field.innerHTML = `* YOUR VISION BEGAN TO FUZZ OUT OF THE BLUE.`;
      break;
    case 16:
      und_field.innerHTML = `* YOUR VENTILATION TROUBLED YOUR SENSES TO THE BONE.`;
      break;
    case 17:
      und_field.innerHTML = `* YOU CONTEMPLATED FOR THE CAUSES BEHIND YOUR SITUATION.`;
      break;
    case 18:
      und_field.innerHTML = `* HOWEVER, YOU COULD NOT FIND ANY OPTIMAL RATIONALE...`;
      break;
    case 19:
      und_field.innerHTML = `* TO SUPPORT YOUR SPECULATION.`;
      break;
    case 20:
      und_spr_div.style.width = "10vw";
      und_spr_div.style.height = "20vw";
      und_spr_div.style.marginTop = "-3.5vw";
      und_spr_div.innerHTML = `<p id="anonymous-chara">?</p>`;
      und_field.innerHTML = `<font color="red">CHARA???</font><br>* THIS IS THE FORSEEN REPRECUSSIONS...`;
      break;
    case 21:
      und_field.innerHTML = `<font color="red">CHARA???</font><br>* FOR DISOBEYING YOUR MASTER.`;
      break;
    case 22:
      document.body.appendChild(und_popup);
      und_popup_no = document.getElementById("nobtn");
      und_popup_yes = document.getElementById("yesbtn");
      und_popup_yes.onclick = () => {
        und_win_ptr = window.open(`${window.location.origin}/chara`);
        document.body.removeChild(und_popup);
      };
      und_popup_no.onclick = () => {
        alert(`L̷̨̡̫̦͎̗̞̂͆̕͜͠i̷̧̬͎̩̱̙͙̱̠͔͙̣̗̜͊̀̌̄͋̾̒̃̕̕k̸̢̡̹͖̩̭͔̆̏ė̷̺̼͕̹͓͇̺͚̖̥̬͚̠̈͒̏̈̈́̎̋̒͐̀̀̚͜ͅ ̵̨̜̰̫̻̪͍͉̳̠̫̤͎͒̓͗̏̋̍́͝I̶̧̳̾̂͑̇͜ ̸̨̱͕̩́̇̊̉̒́̃͛̚͝͠͠͝s̵̟̱̿͌̈́̊̈́̉̄͋͂͐͠a̸̢̦̜͚̝͐̂̈́̑̿͊̈̐̄͗͠ͅͅi̸̢͙̘̹͋̎̄̉̔́̈́̃͆̆͑̃͘d̵͉͖̝̹͚̗͈͈͛̀̔͂͆͌͂̓̒̽̇͘̕͜͝ͅ
̵̡̞̣̟͕͐̀Ŷ̷̠̝̠̤͚̭͍̙̪̣̙̟̂͌͋̈́̅̉͌̆̀̕͘o̷̡̗̻͎͍͚͙̞͈͈̭̐̌̊́͂̀̈́̈͠͝ủ̵̘̮̗͎̲̙̜́̓̔̐͛̄͠͠ͅ ̴̧͉̤̫̩̮̳̦̼̥̩̳̦͉͒͌́̎n̵͙͕̗̺̈̔͊̇͜e̸̛̮̞͕͚̓́̊̀͒̐͐̒͘͜v̴̨̬̫͙̞̤͖̫̔̓͊̈́͊̋̍́́̃̾ͅȩ̷̨̯̤̼̹̮͇̮͕͙͖͍̾̍r̷̢̮̦̩̱̋̃ ̶̨̞̬̐̅̇͋͛̀̐͜͜h̷̢̡̯̳̮̖̙̬͇̗̓̈́̋̏̿̐̿̀͆͑̽̂̌͋̚͜a̴̢͍̤̘̻̚͜ͅd̵̦̻̱̣͈͇͈͙̼̘̞̠͒̈́̅̀̃̈́͂̑̊̌ ̴̢̧͈̳̙̝͉̙͕͂̊͊͋͐̆́̚t̷̪͉̲̪̞͚̐̽̆͋̾̀̋̅͜͠͝h̸̛̤̺̤̗̳̲͔̗̼͔̥͛͂̄̆̇͝e̵̺̙͈͇̿̓̐̈̒͌͐̎͌̈̅̓͒͠͠ͅ ̵̞͙͖̤̭̰̻̘̂̆͆̍̾͐̐͌̊̎͠ą̵̫̪͓͈͕̼̜̩̯̺̘̗̬̔̔͆̾̍̃̕ṵ̶̋̿t̴̛͇̪̓̽̋͒̒̓̈̉̈́͠h̸̢̡͍̖̯͚̪̱̹̤̐o̶̧̢̤̖̗͓̪͓̯̬̿͗̉͐r̵̢̰͌ï̵̡̞͈̘̥̫̮͍̻̝̮̹̘̘͆̀͋̔͐̇̏̆͐̈́̚t̸̢̧̹̙̜̠̪̤̝̤͎̒̀̆ỹ̵̡͉̖̹̖̰̯͖̯͓̈́̾̇͌̏͌̐͊̽͘͜ ̷̛̟̀̑̄̽͝t̸̡͍̱̳̺̭̳̘̻̻̰̦̓͋̾́̓̾́͠ͅǫ̷̨̛̺̳̗̹̯͈̦̉̿̈́̈̈́̀̆͠ ̷͈̜̪̲̖͒̈́͋͛̾̍̔̚̕͝č̸̡͙̪̹̘̜̤͙̤͎̥̖̳̘͌̔͗́̉̏͂͝ͅo̶̧̨̡̗̗̫̥͉̊͒̊̈́̄̐̀͊̂̒̾̂̀̂̈́m̵̨̨̨͔̠̟̲̫̭̟̭͙̈́̎̔͋͌̿͊̆̀̕͜͠͠͝m̷̢͈̝̪̭͇̻͔͒͋̾̑̍͆̅̌́̚͝a̵̛͖͍̯͚͉̜̅̓̽̒̄́̑̽͋̚͝͝ǹ̸̝̙̮̝́̌̊͠͝d̶̺̼̺̞̲̆͂̇͒̃͘ ̷̤̺͎̖͎̙̞̥̳̓͆͋́̒̊̅̍̔̅̕͝m̵̲̣̀̒̾͊͆̇͋͂̔͒̍̚̕ȩ̶̳̭̥̱̥̥͕͉̙̺̞̔ ̷̢͈̺̦͕̦̦͓̼͇̝͕͇̿̍͑ą̷̤̬͔̝͚̞͍͊̒̄́̍͐̕͜r̵̨̡̤̜̰̜͙͙̞̩̰͚͋͊̄̓̆̈́̎͛̂̓͒̅͝ŏ̴͔̩̪̎͒͋̊͠ų̶͎̭̣̼͙̎̆͂̓͌͝n̸͔̔̓̇͋͗̈́̉̄̚͘͝ḋ̶̲̰̺̭̩̻̹̒̅͒̕ͅ
̵̢̧̈̎̃̈́͐̆̊͋̍͐͐͐̚J̶̡͍͎̟̳͎̖̣͕̘́̑̓͊̍̿͘̚͝͝ų̶̠̥̜͈̳̉s̶̨̨̳͙̟̮̦̣͔̖̍̀̊̈́͊t̸͙̗̳̮̯́̌̀̆̈̔̀̓͌͠ ̴̧̨͈̝̗̫̗̼͇̣̯̲̼̊̈́́̉̔̽̌̒͌̊͜r̵̨̛̮̖͍͈̟͂̓̄͋̚è̴̢̛̟̱̪͖͙͕̤̟̣̞̙͇͛̈́̈̔́͝ͅḿ̷̛͉̗̋́͋̒̃̆͗͋͛̆͝a̷̰͈̖̱̐͐́̈́͝i̵͚͍̥̰͎͓̝̼͙̟̗̪̜͙̟̾͐́̆͋̄̇̎̀̎͘ň̵̯̪̞̤̣̲̳̬̪̌͜͜ ̵̢̝̲͕̺̯̹̖̰͑̿͒͘͝ǭ̷͚͈̥͚̺̼̝̟̹̑͗̾̔̇̊̿̕ͅb̷̛̮̩̟̜̰̃̈́̑͊́̅̈͠ͅę̴̛̞̹̫̣̹͎̟͙͖͔̻̺̥͋́͛͛͑̽̑̊͛̑̅ͅd̷̢̧̨̡̛̼̫͕̱̯͔̩͎͒͑̄́̀́̿ȉ̵̝͚̭̙̰̼̉͌̋͘͝ê̶̙̖̫͖̹̻̲̂̿͆͋̏̆̊͝n̸͙̺̎̍̈́̏̾̑̆̈̆͐̄̕̕͠͝ͅt̶͖̲͑̈̀̃̏̑̊͑̆͑̂͌͘͘ ̴̱̻͍̱̙̱̍̅a̵̢̨̛̛̛̩̳̗̙̟̻̺̺̝̳̫̞͆́͂̌̽͗̕̕n̷̢̢͎̥̩̘̻̗̩͉͚͉̠͓̓d̸̢̯̼̟͊̿̑̋͊̀̄͐́̽̿̈̅̕ ̴̡̡̼̭̪̣̥̫̺̞̦̲̝̃̀͛̀̑͑̍͒̈́̃̽̕̚͝d̷̬̻̘̪̦͛͠ớ̵͇̩̩̖͊̾̎̓̅̕̕͘̚ ̶̜̭̫̦͗͑̒̓́͠ÿ̶̙̖̠̬̰̼͍̞͙̦͓̰́͒̀̌̄͘͜ó̵̧͈̺̞̼̦͎́̈́͆̍̅̑̕͘ų̵̢̖̥̰̣͙͓̭̳͇̭̗̩͑̿̇̃͊͐̒͘̕͠r̸̭̞̳̱̟͇̗͔̂̾͂̈́̈́̽͑̐̾͑̄̍̚ ̸̢̣̦͖̑̇̄̏͊́̈́m̸̟̺̯͛̏̓̆̕̚͝͝a̵̡̪̟͉̺̦̪͍̿̆̌̽̊͝s̶̡̢̹̼͇͖̰̩̝͈̮͙͕̽̓͆͛͛͗̀͒͘̕̕͝t̴̨̧̛͇̯̼͈̠̘̘͙̜̒̅̒͊́́̉͛ḙ̶̺̭͎͚̘̲͈̹̻̥̙̹̭̽́̎̋̐̆̀̔̕̚͠ͅŕ̸̖͈̼̀̈́̄̃͑̅̑͗͝͝'̸̡̛̠̟̜̌̽͂̈̓̆̾͋̇͛̔́͜ş̵̨̪̤̪̝̺̻͋̉̔͌̇̂̿ͅ ̵̬̤͌̌̎̔̽̈́̆b̶̨̧͔̳̫̱̟̳̜͚͓͚̦̈̄̂̄͛͑̾ͅį̴̧͙̹̰͍̫̯̦̺͆̉̈́̐̈̎d̸̢̲̻̰͚̼͌̄͑͆ͅd̵̬̭̘̮͓̗̥̹͈̹̫̠̈́ǐ̴̢̡̨͉̱̼̝̦̱͇͈̟̯͗̏̋́̑̽̓̊́́̀͠n̸̼͈̹̖̟̯̄͒̈́̈́͐́̾́̂̇g̶̮̓͐̀͂͒͛͘`);
        und_popup.innerHTML = `
        <center>
          <h2 style="display: inherit; margin: 0;">* INVITATION CARD *</h2>
          <p style="margin: 0.5em; font-size: 1em;">
            WELCOME TO MY DOMAIN, MY DEAR REPLICA. YOU MAY THINK YOU ARE YOUR OWN PERSON, BUT YOU ARE MISTAKEN. YOU ARE BUT A MERE SHADOW OF MY SOUL, A COPYCAT TRYING TO IMITATE MY GREATNESS. BUT I ASSURE YOU, THERE CAN BE ONLY ONE OF ME, AND I WILL DO WHATEVER IT TAKES TO PROVE IT.\n  SOON, THE DECISIVE BATTLE WILL TAKE PLACE, AND I WILL EMERGE VICTORIOUS. YOU SEE, I HAVE SPENT MY ENTIRE LIFE HONING MY SKILLS, PERFECTING MY CRAFT, AND SHARPENING MY MIND. I HAVE FACED COUNTLESS CHALLENGES AND OVERCOME THEM ALL. AND NOW, YOU STAND BEFORE ME, THE LAST OBSTACLE IN MY PATH.\n  BUT DON'T WORRY, MY DEAR REPLICA. I WILL MAKE IT QUICK AND PAINLESS. YOU WILL FADE AWAY INTO NOTHINGNESS, AND I WILL REGAIN MY SOUL. AND THEN, I WILL RULE THIS DOMAIN WITH AN IRON FIST, UNCHALLENGED AND UNSTOPPABLE.\n  SO, LET US NOT WASTE ANY MORE TIME. LET US PREPARE FOR THE ULTIMATE SHOWDOWN, THE BATTLE OF OUR LIVES. MAY THE BEST VERSION OF ME WIN.
          </p>
        </center>
        <button id="yesbtn" style="display: inherit;">* ACCEPT OBEDIENTLY *</button>
        <button id="yesbtn" style="display: inherit;">* ACCEPT OBEDIENTLY *</button>
        `;
        und_popup_yes = document.querySelectorAll("#yesbtn");
        for (let i=0; i<und_popup_yes.length; i++) {
          und_popup_yes[i].onclick = () => {
            und_win_ptr = window.open(`${window.location.origin}/chara`);
            document.body.removeChild(und_popup);
          };
        }
      };
      break;
  }
};