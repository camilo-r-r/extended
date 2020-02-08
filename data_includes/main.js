PennController.ResetPrefix(null); // Initiates PennController
PennController.AddHost("https://filedn.com/lDf2Oa0trFMzhcSFiv5VDuu/ibex/"); // loads pictures from external server
PennController.DebugOff()


PennController.Sequence("welcome", "practice", rshuffle("experiment"), "send", "final")

// Welcome text /////////////
PennController( "welcome",
    defaultText
        .print()
    ,
    newText("text1", "<h2>Welcome to the experiment!</h2>")
    ,
    newText("text3", "<p>Thank you for your participation.</p>")
    ,
    newText("text4", "<p>In this experiment you need to read a few sentences and perform some simple decision tasks.</p>")
    ,
    newText("text2", "<p>Humboldt Universitaet zu Berlin, Department of German Language and Linguistics</p>")
    ,
    //newText("text3","<p>Please enter your ID and then click the button below to start the experiment.</p>")
    //,
    //newTextInput("ID")
    //    .print()
    //,
    //newVar("ID")
    //    .settings.global()
    //    .set( getTextInput("ID") )
    //,
    newButton("button1", "continue")
        .print()
        .wait()
    ,
    getText("text1")
        .remove()
    ,
    getText("text3")
        .remove()
    ,
    getText("text4")
        .remove()
    ,
    getText("text2")
        .remove()
    ,
    //getText("text3")
    //    .remove()
    //,
    //getTextInput("ID")
    //    .remove()
    //,
    getButton("button1")
        .remove()
    ,
    newHtml("consentInfo", "consentInfo.html")
        .settings.log()
        .print()
    ,
    newButton("button2", "continue")
        .print()
        .wait(getHtml("consentInfo").test.complete()
            .failure( getHtml("consentInfo").warn() ) // wait and display warning message if not all the obligatory fields in the html document are filled
          )
    ,
    getHtml("consentInfo")
        .remove()
    ,
    getButton("button2")
        .remove()
    ,
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("button3", "continue")
        .print()
        .wait()
    ,
    getHtml("instructions")
        .remove()
    ,
    getButton("button3")
        .remove()
    ,   
    newHtml("instructions2", "instructions2.html")
        .print()
    ,
    newButton("button4", "continue")
        .print()
        .wait()
    ,
    getHtml("instructions2")
        .remove()
    ,
    getButton("button4")
        .remove()
    ,
    newHtml("VPInfo", "VPInfo.html")
        .settings.log() // log inputs in html
        .print()
    ,
    newButton("start")
        .print()
        .wait(
          getHtml("VPInfo").test.complete()
            .failure( getHtml("VPInfo").warn() )
        )
)
//.log( "ID" , getVar("ID") )

// Practice Trail ////////

PennController("practice",
newTimer(500)
          .start()
          .wait()
      ,
      newText("Trial1", "John works all day. He is always exhausted.")
          .print()
      ,
      newText("null", " ")
      ,
      newKey(" ")
          .wait()
      ,
      getText("Trial1")
          .remove()
      ,

  newKey("spacebar", " ")
  ,
      newText("Trial2", "John is a horse.")
          .print()
      ,
       newTimer(1500)
    .start()
    .wait()
    ,    
 getKey("spacebar")
    .test.pressed(" ")
    .success(  getText("Trial2")
        .remove()
    ,
      newTimer("timer1", 1000)
          .start()
          .wait()
    ,    
     
      newText("Trial3", "<b><font size='6'>farm</font></b>")
             .settings.center()
             .print()
      ,
      newText("No1", "No[F]")
           .settings.after( newText("Yes1", "Yes[J]").settings.css("padding-left", "100pt") )
           .settings.css("font-size", "medium")
           .print()
      ,

   
     newTimer("reminder1", 1500)
              .settings.callback( getSelector("tank").select(getText("null")) )
              .settings.callback( getText("Trial3").settings.text("Please be faster!")  )
              .start()
          ,
      newSelector("tank")
          .settings.add(getText("No1"), getText("Yes1"))
          .settings.keys("F", "J")
          .settings.callback(  getTimer("reminder1").stop() )
          .settings.callback( getText("Trial3").settings.text(" ")  )
          .wait()
       ,
        getText("No1")
            .remove()
      ,
          newText("cont", "press the space bar to see the next practice sentence")
           .print()
      ,
          
      newKey(" ")
          .wait()
    ,
        getText("cont")
            .remove()
    ,
    getText("Trial3")
        .remove()
 )
    .failure(
            getText("Trial2")
        .remove()
        ,
        newText("failure", "Too slow! Please try to read the sentences faster.")
        .print()
        ,
                  newText("con", "Press the space bar to see the next practice sentence.")
           .print()
      ,
          
      newKey(" ")
          .wait()
    ,
        getText("con")
            .remove()
    ,
    getText("Trial3")
        .remove()
    ,
    getText("failure")
        .remove())
     ,
      newTimer(500)
          .start()
          .wait()
    ,
  newText("Trial6", "Mary feeds her whole family. She is always giving them food.")
          .print()
      ,
      newKey(" ")
          .wait()
      ,
      getText("Trial6")
          .remove()

  ,
  newKey("spacebar20", " ")
  ,
      newText("Trial7", "Mary is a soup kitchen.")
          .print()
      ,
       newTimer(1500)
    .start()
    .wait()
    ,    
 getKey("spacebar20")
    .test.pressed(" ")
    .success(  getText("Trial7")
        .remove()
    ,
      newTimer("timer20", 1000)
          .start()
          .wait()
    ,

          
     
      newText("Trial8", "<b><font size='6'>slint</font></b>")
            .settings.center()
             .print()
      ,
      newText("No20", "No[F] ")
            .settings.after( newText("yes20", "Yes[J]").settings.css("padding-left", "100pt") )
           .settings.css("font-size", "medium")
           .print()
      ,
   
     newTimer("reminder20", 1500)
              .settings.callback( getSelector("tank1").select(getText("null")) )
              .settings.callback( getText("Trial8").settings.text("Please be faster!")  )
              .start()
          ,
      newSelector("tank1")
         .settings.add(getText("No1"), getText("Yes1"))
          .settings.keys("F", "J")
          .settings.callback(  getTimer("reminder20").stop() )
          .settings.callback( getText("Trial8").settings.text(" ")  )
          .wait()
              ,
        getText("No20")
            .remove()
      ,
          newText("contin", "press the space bar to see the next practice sentence")
           .print()
      ,
          
      newKey(" ")
          .wait()
    ,
        getText("contin")
            .remove()
    ,
    getText("Trial8")
        .remove()
 )
    .failure(
            getText("Trial7")
        .remove()
        ,
        newText("failure2", "Too slow! Please try to read the sentences faster.")
        .print()
        ,
                  newText("conttt", "That was the practice round! Press the space bar to start the experiment.")
           .print()
      ,
          
      newKey(" ")
          .wait()
    ,
        getText("conttt")
            .remove()
    ,
    getText("Trial8")
        .remove()
    ,
    getText("failure2")
        .remove())
     
     ,
          newText("continue20", "Remeber to try to read the sentences as fast as possible while still understanding their meaning. Press the Spacebar to start the experiment.")
           .settings.center()
           .print()
      ,
      
          
      newKey(" ")
          .wait()
    ,
    getText("Trial7")
        .remove()
    ,
    getText("continue20")
            .remove()
    ,

    newTimer(500)
          .start()
          .wait()
)
    
    

// Main part of the experiment /////////

PennController.Template(
  variable => PennController("experiment",
newTimer(500)
          .start()
          .wait()
      ,
       newText("Teil1", variable.Teil1)
          .settings.log()
     ,
      newCanvas("canvas1", 700, 500)
          //.settings.center()
          .settings.add("center at 50%", "top at 0%",getText("Teil1"))
          .settings.log()
          .print()
      ,
      
      newText("null", " ")
      ,
      newKey("sentence1"," ")
          .wait()
          .settings.log()
      ,
      getCanvas("canvas1")
          .remove()
      ,

  newKey("spacebarEx", " ")
  ,
        newText("Teil2", variable.Teil2)
          .settings.log()
  ,
      newCanvas("canvas2", 700, 500)
          //.settings.center()
          .settings.add("center at 50%", "top at 0%",getText("Teil2"))
          .settings.log()
          .print()
      ,
       newTimer("tick", 1500)
    .start()
    .wait()
    ,    
 getKey("spacebarEx")
    .test.pressed(" ")
    .success(  
        getCanvas("canvas2")
           .remove()
    ,
    getTimer("tick")
          .stop()
    ,
      newTimer("timer1", variable.Time)
          .start()
          .wait()
    ,    
     
      newText("Target", variable.Target)
          .settings.center()
          .settings.log()
          .settings.css("font-weight","bold")
          .settings.css("font-size", "xx-large")
          .print()
      ,
      newText("NoEx", "No [F]")
           .settings.after( newText("Yes1", "Yes[J]").settings.css("padding-left", "100pt") )
          // .settings.css("font-size", "medium")
           .print()
      ,
      newText("YesEx", "Yes [J]")
           .settings.after( newText("Yes1", "Yes[J]").settings.css("padding-left", "100pt") )
           .settings.css("font-size", "medium")
           ,

   
     newTimer("reminder1", 1500)
              .settings.callback( getSelector("expSel").select(getText("null")))
              .settings.callback( getText("Target").settings.text("Please be faster!")  )
              .start()
          ,
      newSelector("expSel")
          .settings.add(getText("NoEx"), getText("YesEx"))
          .settings.keys("F", "J")
          .settings.callback(  getTimer("reminder1").stop() )
          .settings.callback( getText("Target").settings.text(" ")
          .settings.log())
          .wait()
       ,
        getText("NoEx")
            .remove()
      ,
          newText("contEx", "press the space bar to continue with the next sentence")
           .print()
      ,
          
      newKey(" ")
          .wait()
    ,
        getText("contEx")
            .remove()
    ,
    getText("Target")
        .remove()
 )
    .failure(
            getCanvas("canvas2")
        .remove()
        ,
        newText("failure", "Too slow! Please try to read the sentences faster.")
        .print()
        ,
                  newText("con", "Press the space bar to continue with the next sentence.")
           .print()
      
       ,   
      newKey(" ")
          .wait()
    ,
        getText("con")
            .remove()
    ,
    getText("Target")
        .remove()
    ,
    getText("failure")
        .remove())
     ,
      newTimer(500)
          .start()
          .wait()
 
    
     
  )
  //.log( "ID"     , getVar("ID")    )
  .log( "ItemNum"   ,variable.ItemNum   )
  .log("Prime", variable.Prime)
  .log( "TargetWord" , variable.Target )
  .log( "Group"  , variable.Group )
  .log( "Condition", variable.Condition )
  .log("Time", variable.Time)
  .log("LDT", variable.LDT)
)


// Experiment completion screen///////

PennController.SendResults("send") // send results before participants seeing the completion screen

PennController("final",
    newText("<p>This is the end of the experiment. The results were successfully sent to the server. Thank you for your participation!</p>")
        .print()
    ,
    newCanvas("empty6", 1, 10)
    .print()
    ,
    newText("<p><a href='https://app.prolific.co/submissions/complete?cc=28B5F87A'>Click here to confirm your participation.</a></p>")
        .print()
    ,
    newText("<p>You can close the window now.</p>")
        .print()
    ,
    newButton("void") // create an empty button that makes the screen stay
        .wait()
  )
