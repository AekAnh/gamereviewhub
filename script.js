const gameData = {
  minecraft: {
    title: "Minecraft",
    review: `Minecraft เป็นเกมแนว Sandbox ที่เปิดโอกาสให้ผู้เล่นสร้างและสำรวจโลกเสมือนจริงด้วยบล็อกหลากหลายชนิด พร้อมสนุกไปกับการผจญภัยและการสร้างสรรค์แบบไร้ขอบเขต`,

    review_story: `เนื้อเรื่อง (Story): Minecraft ไม่มีเนื้อเรื่องหลักที่ตายตัว แต่ผู้เล่นสามารถสร้างเรื่องราวของตัวเองได้ผ่านการสำรวจและการผจญภัยในโลกที่ไม่เหมือนใคร 
    ในโหมด Survival คุณจะเริ่มต้นในโลกที่สุ่มสร้างและต้องเอาตัวรอดจากมอนสเตอร์ในเวลากลางคืน สร้างที่อยู่อาศัย หาทรัพยากร และอัปเกรดอุปกรณ์ของคุณ 
    หรือในโหมด Creative คุณสามารถมุ่งเน้นที่การสร้างสรรค์โดยไม่มีข้อจำกัดของทรัพยากร เรื่องราวใน Minecraft ขึ้นอยู่กับจินตนาการของผู้เล่นที่เลือกเดินทางและตัดสินใจด้วยตนเอง`,

    review_gameplay: `ระบบการเล่น (Gameplay): ระบบการเล่นของ Minecraft เน้นอิสระและความสร้างสรรค์ ผู้เล่นสามารถทำกิจกรรมต่างๆ 
    เช่น การขุดหาแร่ สร้างสิ่งปลูกสร้าง สำรวจดินแดน และต่อสู้กับมอนสเตอร์ นอกจากนี้ยังมีระบบการคราฟท์ไอเทม 
    ซึ่งผู้เล่นจะได้ค้นพบสูตรและสร้างสิ่งของเพื่อช่วยในการดำเนินเกม คุณสามารถเลือกเล่นในโหมด Survival 
    เพื่อค้นหาทรัพยากรและเอาตัวรอด หรือโหมด Creative ที่ให้ทรัพยากรแบบไม่จำกัดเพื่อเน้นการสร้างสรรค์ 
    โลกในเกมเปิดกว้างและสุ่มสร้าง ทำให้ทุกครั้งที่เล่นเป็นประสบการณ์ใหม่ ผู้เล่นยังสามารถเชื่อมต่อในโหมด 
    Multiplayer เพื่อสร้างโลกหรือผจญภัยไปพร้อมกับเพื่อนๆ ได้อีกด้วย`,

    review_graphic: `กราฟิก (Graphic): กราฟิกของ Minecraft มีเอกลักษณ์ที่ไม่เหมือนใคร ด้วยการออกแบบที่ใช้บล็อกในรูปทรงเหลี่ยมสร้างโลกสามมิติ 
    แม้ว่าอาจไม่ได้เน้นความสมจริง แต่สไตล์นี้กลับสร้างเสน่ห์และความแปลกใหม่สำหรับผู้เล่น เอฟเฟกต์แสงและเงาถูกปรับแต่งให้เหมาะสมเพื่อเพิ่มบรรยากาศให้กับโลกในเกม 
    นอกจากนี้ยังมี Texture Packs และ Mods ที่ผู้เล่นสามารถดาวน์โหลดเพื่อปรับแต่งกราฟิกให้ตรงกับความชอบของตัวเองได้`,

    score: "9/10",
    video: "videos/minecraft.mp4",
    screenshots: [
      "images/screenshots/minecraft/minecraft1.png",
      "images/screenshots/minecraft/minecraft2.webp",
      "images/screenshots/minecraft/minecraft3.webp",
      "images/screenshots/minecraft/minecraft4.jpg",
    ]
  },
  eldenring: {
    title: "Elden Ring",
    review: `Elden Ring เป็นเกมแนวแอ็กชัน RPG ในโลกแฟนตาซีที่มืดมน 
    ผู้เล่นสำรวจดินแดนอันกว้างใหญ่ ต่อสู้กับศัตรูที่ท้าทาย 
    และแก้ปริศนาผ่านเนื้อเรื่องที่ลึกซึ้งและเปิดกว้างสำหรับการตีความ 
    เหมาะสำหรับคนที่ชื่นชอบความท้าทายและการเล่าเรื่องที่น่าหลงใหล`,

    review_story: `"Elden Ring" มีเนื้อเรื่องที่น่าหลงใหลและซับซ้อน ซึ่งเป็นผลงานร่วมกันของ Hidetaka Miyazaki และ George R.R. Martin 
    ผู้สร้างโลกแฟนตาซีที่เต็มไปด้วยความมืดมนและลึกลับ เกมเริ่มต้นในดินแดนที่เรียกว่า "The Lands Between" ซึ่ง Elden Ring แตกสลายและนำไปสู่ความโกลาหล 
    คุณรับบทเป็น Tarnished ผู้ถูกเรียกกลับมาเพื่อค้นหาเศษชิ้นส่วนของ Elden Ring และฟื้นฟูความสงบสุขให้ดินแดนนี้
    เนื้อเรื่องมีความลึกซึ้งและเปิดกว้างสำหรับการตีความ แต่ละตัวละครและสถานที่ที่คุณพบมีประวัติศาสตร์และปริศนาที่น่าค้นหา 
    คุณจะพบกับเหล่าตัวละครที่มีความซับซ้อนและแรงจูงใจที่หลากหลาย เช่น เศษเทพผู้ปกครองดินแดน และพันธมิตรหรือศัตรูที่มีบทบาทสำคัญในเส้นทางของคุณ
    เรื่องราวของเกมเต็มไปด้วยความเศร้าสร้อย ความหวัง และการค้นหาความหมายในโลกที่แตกสลาย มันดึงผู้เล่นเข้าสู่จักรวาลที่เต็มไปด้วยเสน่ห์ ความท้าทาย และความประทับใจที่ยากจะลืม`,

    review_gameplay: `ระบบการเล่นของ "Elden Ring" มีความหลากหลายและโดดเด่นในแนวแอ็กชัน RPG ผู้เล่นจะได้ออกสำรวจโลกเปิดขนาดใหญ่ (Open World) 
    ซึ่งเต็มไปด้วยพื้นที่ต่างๆ ที่น่าสำรวจและความลับที่น่าค้นหา การต่อสู้เน้นการใช้กลยุทธ์และความแม่นยำ โดยผู้เล่นสามารถเลือกใช้อาวุธ เวทมนตร์ และทักษะที่เหมาะกับสไตล์การเล่นของตนเอง
    เกมยังให้ความสำคัญกับการปรับแต่งตัวละคร ระบบการอัปเกรดอาวุธและเครื่องป้องกัน รวมถึงการพัฒนาค่าพลังเพื่อให้ตัวละครแข็งแกร่งขึ้น นอกจากนี้ ผู้เล่นยังสามารถใช้ม้าในการเดินทางหรือช่วยในการต่อสู้ 
    และการร่วมมือหรือแข่งขันกับผู้เล่นอื่นในโหมดออนไลน์เพิ่มความสนุกและความท้าทายยิ่งขึ้น ระบบการเล่นได้รับการออกแบบมาอย่างดีเพื่อมอบประสบการณ์ที่ท้าทายและเต็มไปด้วยอิสระในการสำรวจและผจญภัย`,

    review_graphic: `กราฟิกของ "Elden Ring" โดดเด่นด้วยการออกแบบศิลป์ที่สวยงามและมีเอกลักษณ์ โลกในเกมถูกสร้าง
    ขึ้นอย่างพิถีพิถันด้วยรายละเอียดที่น่าทึ่ง ตั้งแต่ภูมิประเทศที่กว้างใหญ่และหลากหลาย เช่น ป่าเขียวขจี ทุ่ง
    หญ้าเวิ้งว้าง ไปจนถึงปราสาทโบราณและดันเจี้ยนที่น่าสะพรึงกลัว การใช้แสง เงา และเอฟเฟกต์สภาพอากาศเพิ่มความสมจริงและอารมณ์ให้กับฉากต่างๆ 
    สไตล์กราฟิกของเกมผสมผสานความแฟนตาซีและความมืดมนได้อย่างลงตัว ซึ่งช่วยเสริมสร้างบรรยากาศที่ลึกลับและน่าดื่มด่ำสำหรับผู้เล่นได้อย่างน่าประทับใจ`,
    
    score: "9.5/10",
    video: "videos/eldenring.mp4",
    screenshots: [
      "images/screenshots/eldenring/eldenring1.webp",
      "images/screenshots/eldenring/eldenring2.jpg",
      "images/screenshots/eldenring/eldenring3.jpg",
      "images/screenshots/eldenring/eldenring4.jpg"
    ]
  },
  cyberpunk2077: {
    title: "Cyberpunk 2077",
    review: `"Cyberpunk 2077" เป็นเกมแนวแอ็กชัน RPG ที่มีโลกเปิดขนาดใหญ่ในธีมไซเบอร์พังก์ที่เต็มไปด้วยความล้ำสมัยและความดิสโทเปีย 
    ผู้เล่นได้รับอิสระในการปรับแต่งตัวละครและสำรวจเรื่องราวที่เข้มข้นในเมือง Night City ที่เต็มไปด้วยชีวิตชีวาและอันตราย`,

    review_story: `เนื้อเรื่องของ "Cyberpunk 2077" กล่าวถึง V ตัวละครหลักที่ผู้เล่นสามารถปรับแต่งได้ ซึ่งมีเป้าหมายในการค้นหาความมั่งคั่ง อำนาจ 
    และความเป็นอมตะใน Night City เมืองที่เต็มไปด้วยความรุ่งเรืองของเทคโนโลยีและความเสื่อมถอยทางสังคม เรื่องราวเริ่มต้นด้วยการที่ V ได้รับชิปที่มีข้อมูลสำคัญจากองค์กรระดับสูง 
    โดยชิปนี้มีตัวตนของ Johnny Silverhand ร็อกเกอร์ผู้ต่อต้านระบบอยู่ในนั้น V จะต้องเผชิญกับทางเลือกที่ยากลำบาก และการตัดสินใจที่คุณเลือกจะส่งผลต่อทั้งชีวิตของ V และคนรอบตัว 
    เรื่องราวเต็มไปด้วยความดราม่า การทรยศ และการค้นหาอัตลักษณ์ในโลกที่เต็มไปด้วยความล้ำยุคและความขัดแย้ง`,

    review_gameplay: `ระบบการเล่นของ "Cyberpunk 2077" เน้นการสำรวจโลกเปิดขนาดใหญ่ ผู้เล่นสามารถเลือกได้ว่าจะเล่นในสไตล์แอ็กชันหรือแบบลอบเร้น 
    มีระบบการต่อสู้ที่ใช้ทั้งอาวุธและเทคโนโลยีล้ำยุค เช่น ปืน ไซเบอร์แวร์ และอุปกรณ์เสริมความสามารถ การปรับแต่งตัวละครเป็นจุดเด่นสำคัญที่ให้คุณเลือกสายอาชีพ 
    ความสามารถ และทักษะที่เหมาะสมกับการเล่นของคุณ รวมถึงการอัปเกรดอุปกรณ์และตัวละครเพื่อเพิ่มความแข็งแกร่ง การสนทนากับตัวละคร NPC มีผลต่อเรื่องราวและทางเลือกต่างๆ 
    ในเกม โหมดภารกิจหลักและภารกิจรองในโลกที่เปิดกว้างนี้ช่วยสร้างประสบการณ์ที่มีความหลากหลายและน่าตื่นเต้น`,

    review_graphic: `กราฟิกของ "Cyberpunk 2077" มีความอลังการและสมจริง โดยเมือง Night City ถูกออกแบบมาให้มีชีวิตชีวาและเต็มไปด้วยรายละเอียดที่น่าทึ่ง
    ผู้เล่นจะเห็นความล้ำยุคผ่านตึกระฟ้า เทคโนโลยีล้ำสมัย และแสงไฟนีออนที่ส่องประกาย รวมถึงความเปรียบต่างของย่านที่มีความมั่งคั่งและความเสื่อมโทรม 
    เอฟเฟกต์แสง เงา และการสะท้อนถูกทำให้ดูสมจริงและสร้างบรรยากาศที่น่าดื่มด่ำ กราฟิกที่ละเอียดและบรรยากาศที่มีความเฉพาะตัวของเกมช่วยดึงผู้เล่นเข้าสู่โลกแห่งไซเบอร์พังก์ได้อย่างมีประสิทธิภาพ`,

    score: "8/10",
    video: "videos/cyberpunk2077.mp4",
    screenshots: [
      "images/screenshots/cyberpunk2077/cyberpunk1.jpg",
      "images/screenshots/cyberpunk2077/cyberpunk2.jpg",
      "images/screenshots/cyberpunk2077/cyberpunk3.avif",
      "images/screenshots/cyberpunk2077/cyberpunk4.jpg"
    ]
  },
  valorant: {
    title: "Valorant",
    review: `Valorant" เป็นเกมยิงแนว Tactical FPS ที่เน้นการเล่นเป็นทีม ผู้เล่นต้องใช้กลยุทธ์และความสามารถเฉพาะตัวของเอเจนต์ (Agents) แต่ละตัวเพื่อคว้าชัยชนะในสนามรบ`,

    review_story: `"Valorant" ตั้งอยู่ในโลกอนาคตหลังเหตุการณ์ที่เรียกว่า "First Light" ซึ่งเปลี่ยนแปลงวิถีชีวิตของมนุษยชาติและนำไปสู่การปรากฏตัวของ Radiants 
    ผู้มีพลังพิเศษ หน่วยงาน Valorant Protocol ได้ก่อตั้งขึ้นโดยการรวบรวมทั้งมนุษย์ธรรมดาและ Radiants เพื่อปกป้องโลกจากภัยคุกคามต่างๆ รวมถึงกลุ่มที่เกี่ยวข้องกับ 
    "Kingdom Corporation" และเหตุการณ์การทำลายล้างที่มีปริศนา ความขัดแย้งในโลกของเกมเต็มไปด้วยเรื่องราวของเทคโนโลยี พลังพิเศษ และการต่อสู้ระหว่างความดีและความชั่ว`,

    review_gameplay: `"Valorant" เป็นเกม 5v5 ที่ให้ผู้เล่นเลือกตัวละครหรือเอเจนต์ที่มีความสามารถพิเศษเฉพาะตัว เช่น การฮีล การสร้างกำแพง หรือการตรวจจับศัตรู 
    เป้าหมายของเกมแบ่งเป็นสองฝ่าย: ฝ่ายบุก (Attacking) จะต้องวางและป้องกัน Spike จนระเบิด ส่วนฝ่ายป้องกัน (Defending) จะต้องหยุดการวาง Spike หรือปลดชนวนมัน 
    ระบบการเล่นผสมผสานการใช้ยุทธวิธี การสื่อสารในทีม และทักษะการยิงที่แม่นยำ ทำให้เกมมีความตื่นเต้นและต้องใช้ไหวพริบสูง`,

    review_graphic: `กราฟิกของ "Valorant" มีสไตล์ที่สดใสและดูทันสมัย ใช้การออกแบบที่เน้นความชัดเจนเพื่อให้ผู้เล่นสามารถแยกแยะสภาพแวดล้อมและศัตรูได้ง่าย 
    แผนที่ในเกมถูกออกแบบอย่างพิถีพิถัน มีรายละเอียดและธีมเฉพาะตัว เช่น โรงงานที่ถูกทิ้งร้าง เมืองล้ำยุค หรือพื้นที่กลางทะเลทราย เอฟเฟกต์ภาพ เช่น ความสามารถของเอเจนต์หรือการระเบิด 
    ถูกออกแบบมาให้สะดุดตาแต่ไม่รบกวนการเล่น ทำให้เกมมีทั้งความสวยงามและความสมดุลในด้านการเล่นที่เป็นเอกลักษณ์`,

    score: "8.5/10",
    video: "videos/valorant.mp4",
    screenshots: [
      "images/screenshots/valorant/valorant1.jpg",
      "images/screenshots/valorant/valorant2.jpg",
      "images/screenshots/valorant/valorant3.webp",
      "images/screenshots/valorant/valorant4.webp"
    ]
  },
  re4remake: {
    title: "Resident Evil 4 Remake",
    review: `"Resident Evil 4 Remake" เป็นเกมแนวแอ็กชันเอาตัวรอดที่นำเกมระดับตำนานมาปรับปรุงใหม่ด้วยกราฟิกและระบบการเล่นที่ทันสมัย 
    ผู้เล่นจะได้เผชิญหน้ากับความสยองขวัญในบรรยากาศที่เข้มข้นและน่าตื่นเต้น`,

    review_story: `ใน "Resident Evil 4 Remake" ผู้เล่นจะรับบทเป็น Leon S. Kennedy อดีตเจ้าหน้าที่ตำรวจที่เคยต่อสู้กับเหตุการณ์ในเมือง Raccoon City หลังจากเหตุการณ์นั้น 
    เขาได้เข้าร่วมกับหน่วยงานรัฐบาลและได้รับภารกิจสำคัญในการช่วยเหลือ Ashley Graham ลูกสาวของประธานาธิบดีที่ถูกลักพาตัวไป Leon เดินทางไปยังหมู่บ้านอันห่างไกลในยุโรป 
    ซึ่งเต็มไปด้วยชาวบ้านที่กลายเป็นสัตว์ประหลาดจากการติดเชื้อ Las Plagas ในขณะที่ Leon สำรวจพื้นที่ เขาต้องเผชิญกับความลับและการปะทะกับเหล่าผู้นำที่ชั่วร้าย 
    เนื้อเรื่องมีการปรับปรุงเพื่อเพิ่มความลึกซึ้งและความดราม่า ทำให้ผู้เล่นได้สัมผัสความตื่นเต้นและความกดดันมากยิ่งขึ้น`,

    review_gameplay: `ระบบการเล่นในเวอร์ชันรีเมคมีการปรับปรุงให้ทันสมัยมากขึ้น ผู้เล่นจะได้ใช้กลยุทธ์ในการต่อสู้กับศัตรูที่หลากหลาย รวมถึงการใช้ทรัพยากรที่จำกัด 
    เช่น กระสุนและอุปกรณ์ช่วยเหลือ ระบบการยิงและต่อสู้ถูกพัฒนาให้มีความลื่นไหลและตอบสนองดีขึ้น ผู้เล่นสามารถใช้องค์ประกอบต่างๆ ในสิ่งแวดล้อมเพื่อช่วยเอาตัวรอด 
    เช่น การหลบซ่อน การใช้สิ่งกีดขวาง และการปรับปรุงอาวุธผ่านระบบ Merchant การแก้ปริศนาในเกมยังคงเป็นส่วนสำคัญที่เพิ่มความท้าทายและความหลากหลายในเกมเพล`,
    
    review_graphic: `"Resident Evil 4 Remake" โดดเด่นด้วยการออกแบบกราฟิกที่ทันสมัยและสมจริง ใช้เทคโนโลยี RE Engine ในการสร้างสภาพแวดล้อมที่ละเอียดและชวนหลอน 
    ทั้งแสง เงา และการออกแบบตัวละครต่างๆ ถูกปรับปรุงให้ดูน่าขนลุกและเต็มไปด้วยความละเอียดสูง บรรยากาศของหมู่บ้านและสถานที่ต่างๆ ถูกออกแบบมาให้มีความเข้มข้นและสร้างความรู้สึกไม่ปลอดภัยให้กับผู้เล่น 
    กราฟิกที่สมจริงและเอฟเฟกต์ภาพช่วยเสริมสร้างความดื่มด่ำในการสัมผัสประสบการณ์สยองขวัญ`,

    score: "9/10",
    video: "videos/re4remake.mp4",
    screenshots: [
      "images/screenshots/re4remake/re4remake1.jpg",
      "images/screenshots/re4remake/re4remake2.webp",
      "images/screenshots/re4remake/re4remake3.jpg",
      "images/screenshots/re4remake/re4remake4.jpg"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const gameKey = params.get("game");

  if (gameKey && gameData[gameKey]) {
    const game = gameData[gameKey];
    document.getElementById("game-title").textContent = game.title;
    document.getElementById("author-review").textContent = game.review;
    document.getElementById("review-story").textContent = game.review_story;
    document.getElementById("review-gameplay").textContent = game.review_gameplay;
    document.getElementById("review-graphic").textContent = game.review_graphic;

    document.getElementById("author-score").textContent = game.score;

    // โหลดวิดีโอ
    const video = document.getElementById("game-video");
    const videoSource = document.getElementById("video-source");
    if (video && videoSource && game.video) {
      videoSource.src = game.video;
      video.load();
    }

    // โหลด Screenshot
    const screenshotSection = document.querySelector(".screenshot-gallery");
    if (screenshotSection && game.screenshots) {
      screenshotSection.innerHTML = "";
      game.screenshots.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Screenshot";
        screenshotSection.appendChild(img);
      });
    }
  }

  // Comments
  const form = document.getElementById("comment-form");
  const usernameInput = document.getElementById("username-input");
  const commentInput = document.getElementById("comment-input");
  const list = document.getElementById("comment-list");
  
  const gameKeyForComment = new URLSearchParams(window.location.search).get("game") || "default";
  const commentStorageKey = `comments_${gameKeyForComment}`;
  let savedComments = JSON.parse(localStorage.getItem(commentStorageKey)) || [];
  
  function saveComments() {
    localStorage.setItem(commentStorageKey, JSON.stringify(savedComments));
  }
  
  function renderComments() {
    list.innerHTML = "";
    savedComments.forEach((comment, index) => {
      const li = document.createElement("li");
  
      const meta = document.createElement("div");
      meta.className = "comment-meta";
      meta.textContent = `${comment.username} • ${comment.time}`;
  
      const text = document.createElement("div");
      text.textContent = comment.text;
  
      const likeBtn = document.createElement("button");
      likeBtn.className = "like-btn";
      likeBtn.textContent = `❤️ ${comment.likes}`;
      likeBtn.addEventListener("click", () => {
        savedComments[index].likes++;
        saveComments();
        renderComments();
      });
  
      const delBtn = document.createElement("button");
      delBtn.className = "delete-btn";
      delBtn.textContent = "ลบ";
      delBtn.addEventListener("click", () => {
        savedComments.splice(index, 1);
        saveComments();
        renderComments();
      });
  
      li.appendChild(meta);
      li.appendChild(text);
      li.appendChild(likeBtn);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }
  
  if (form) {
    renderComments();
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = usernameInput.value.trim();
      const comment = commentInput.value.trim();
  
      if (username && comment) {
        const now = new Date();
        const time = now.toLocaleString("th-TH");
  
        savedComments.push({
          username,
          text: comment,
          time,
          likes: 0
        });
  
        saveComments();
        renderComments();
        usernameInput.value = "";
        commentInput.value = "";
      }
    });
  }
  

  // 🔍 ค้นหาเกม (ใช้ได้เฉพาะหน้า games.html)
  const searchInput = document.getElementById("search-input");
  const gameCards = document.querySelectorAll(".game-card");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      gameCards.forEach((card) => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(keyword) ? "block" : "none";
      });
    });
  }

  // 🔁 Theme Toggle (ทำงานทุกหน้า)
  const themeToggle = document.getElementById("theme-toggle");
  const root = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.classList.add(savedTheme);
    if (savedTheme === "light-theme" && themeToggle) {
      themeToggle.textContent = "☀️";
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight = root.classList.toggle("light-theme");
      localStorage.setItem("theme", isLight ? "light-theme" : "dark-theme");
      themeToggle.textContent = isLight ? "☀️" : "🌙";
    });
  }
});
// ✅ 📰 Slide ข่าวอัตโนมัติ (ใช้เฉพาะใน index.html เท่านั้น)
const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (sliderTrack && slides.length > 0) {
  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlide() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlide();
    });
  }

  // 🔁 Auto-play ทุก 4 วินาที
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }, 4000);
}
