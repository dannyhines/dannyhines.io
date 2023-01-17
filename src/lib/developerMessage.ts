/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */

export default function developerMessage() {
  console.log(
    '%c __    __   _______  __       __        ______      ___________  __    __   _______  ______      _______ \n' +
      '%c|  |  |  | |   ____||  |     |  |      /  __   \\   |           ||  |  |  | |   ____||   _   \\   |   ____|\n' +
      "%c|  |__|  | |  |__   |  |     |  |     |  |  |  |   `---|  |----'|  |__|  | |  |__   |  |_)  |   |  |__\n" +
      '%c|   __   | |   __|  |  |     |  |     |  |  |  |       |  |     |   __   | |   __|  |      /    |   __|\n' +
      "%c|  |  |  | |  |____ |  `----.|  `----.|  `--'  |       |  |     |  |  |  | |  |____ |  |  \\---.||  |____\n" +
      '%c|__|  |__| |_______||_______||_______| \\______/        |__|     |__|  |__| |_______|| _| `.____||_______|\n\n',
    'color: rgb(167, 139, 250);',
    'color: rgb(167, 139, 250);',
    'color: rgb(139, 92, 246);',
    'color: rgb(124, 58, 237);',
    'color: rgb(109, 40, 217);',
    'color: rgb(109, 40, 217);'
  );

  const msgs = [
    `    Hi, I am a Yugoslavian virus but because of poor technology in my country unfortunately 
    I am not able to harm your computer. Please be so kind to delete one of your important files 
    yourself and then forward me to other users. Many thanks for your cooperation! 
     Best regards, \n     Yugoslavian virus`,
    `    Did you ever hear the tragedy of Darth Plagueis "the wise"? I thought not. It's not a story
    the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so 
    powerful and so wise he could use the Force to influence the midichlorians to create life... 
    He had such a knowledge of the dark side that he could even keep the ones he cared about 
    from dying. The dark side of the Force is a pathway to many abilities some consider to be 
    unnatural. He became so powerful... the only thing he was afraid of was losing his power, which 
    eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, 
    then his apprentice killed him in his sleep. It's ironic he could save others from death, 
    but not himself.`,
    `    The FitnessGram™ Pacer Test is a multistage aerobic capacity 
    test that progressively gets more difficult as it continues. The 20
    meter pacer test will begin in 30 seconds. Line up at the start.
    The running speed starts slowly, but gets faster each minute after
    you hear this signal. [beep] A single lap should be completed each
    time you hear this sound. [ding] Remember to run in a straight
    line, and run as long as possible. The second time you fail to
    complete a lap before the sound, your test is over. The test will
    begin on the word start. On your mark, get ready, start.`,
    `   🇺🇸guys🇺🇸if🇺🇸you🇺🇸receive🇺🇸an🇺🇸email🇺🇸saying🇺🇸"naked🇺🇸pictures🇺🇸of🇺🇸Donald🇺🇸Trump"🇺🇸don't🇺🇸
    open🇺🇸it🇺🇸it🇺🇸is🇺🇸a🇺🇸virus🇺🇸that🇺🇸puts🇺🇸USA🇺🇸flags🇺🇸between🇺🇸everything🇺🇸you🇺🇸type🇺🇸`,
  ];
  const index = Math.floor(Math.random() * 4);
  console.log(
    `%c\n${msgs[index]}\n\n`,
    'font-family: Inter, sans-serif; font-size: 15px; font-weight: 500; display:'
  );
  // console.log(
  //   "%cBut seriously here's the repo if you're curious: " +
  //     '%chttps://github.com/dannyhines/dannyhines.io\n',
  //   'font-family: Inter, sans-serif; font-size: 1.1rem; font-weight: 500;',
  //   'font-family: Inter, sans-serif; font-size: 1.1rem; font-weight: 500; color: #4ee5ae;'
  // );
}
