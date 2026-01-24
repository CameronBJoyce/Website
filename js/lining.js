/**
 * "You can sew almost anything into the lining of a dress."
 * - Phantom Thread
 *
 * This file contains the hidden details of the website.
 */

(function() {
    // 1. The Console Diary
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formattedTime = now.toLocaleDateString('en-US', options);
    
    console.log(`%cHey there, what you doing in my logs at ${formattedTime}?`, "color: #886E4C; font-family: Georgia, serif; font-size: 14px; font-style: italic;");

    // 2. The Watermark (Elegant CBJ Ascii Art)
    const watermark = `
       .cC.
     .CCCCC.   .BBBBBBBb.         .JJJ.
    .CC.       .BB.   .BB.        .JJJ.
   .CC.        .BBBBBBBB.         .JJJ.
   .CC.        .BB.    .BB.       .JJJ.
    .CC.       .BB.    .BB.   .G. .JJJ.
     .CCCCC.   .BBBBBBBBB.     .JJJJJ.
       .cc.                     .jjj.
    `;

    console.log(`%c${watermark}`, "color: #353535; font-family: monospace; font-weight: bold;");
})();
