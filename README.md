# starter
A website that redirects you to today's starter on [corbettmaths](http://corbettmaths.com).

To view this site live visit [starter.mctrees.net](https://starter.mctrees.net).

> This code has been developed by Robert Bradshaw, Oliver Hynds, Calvin Edwards and Ben Griffiths.
> We use starters from corbettmaths

## screenshots

<p align="center">
  <img src="http://oliver.mctrees.net/starter-mobile.png" width="350"/>
  <img src="http://oliver.mctrees.net/starter-desktop.png" width="350"/>
</p>

<html>

<head>
    <title>Today's Corbettmaths Starter</title><!-- Title -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=False"><!-- Mobile scaling -->
    <link rel="icon" href="https://starter.mctrees.net/favicon.ico" type="image/x-icon" /><!-- Force favicon -->
    
    
    <link rel="stylesheet" href="/w3.css"><!--include W3.css-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
  
    <!--call stylesheet-->
    <link rel="stylesheet" href="https://mctrees.net/includes/w3.css">
    <link rel="stylesheet" href="/extra_style.css">
    <link rel="stylesheet" href="https://mctrees.net/includes/lato.css">
    <link rel="stylesheet" href="https://mctrees.net/includes/montserrat.css">
	
	<!---cookie script-->
    <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css" />
    <script src="https://mctrees.net/lib/cookie.js"></script>
    <script>
        window.addEventListener("load", function() {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#2196f3"
                    },
                    "button": {
                        "background": "transparent",
                        "text": "#fff",
                        "border": "#fff"
                    }
                },
                "content": {
                    "href": "https://mctrees.net/legal?s=cookies"
                }
            })
        });
    </script>
    
    <!--google anclytics code -->
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-86189816-7', 'auto', {
            'allowLinker': true
        });
        ga('send', 'pageview');
        ga('require', 'linker');
        ga('linker:autoLink', ['starter.mctrees.net']);
    </script>
    
    <!--figure out what day to redirect you to -->
    <script>
        var today = new Date();
        var year = new Date().getFullYear();
        var first = new Date(today.getFullYear(), 0, 1);
        var Day = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
        var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        if ((leapYear == false) && (Day >= 60)) {
            var theDay = Day + 1;
        } else {
            var theDay = Day
        }
    </script>
    <script>
        function wait(ms){
            var d = new Date();
            var d2 = null;
            do { d2 = new Date(); }
            while(d2-d < ms);
        }
        function footer(){
            var sceenres = screen.height - document.getElementById("head").clientHeight;
            var hight = sceenres + "px";
            document.getElementById("display").style.height = hight;
			
        }
    </script>
	<script src="/lookup-tables/lookupn.js" type="text/javascript" defer></script><!--call numeracy lookup table-->
    <script src="/lookup-tables/lookupf.js" type="text/javascript" defer></script><!--call foudation lookup table-->
    <script src="/lookup-tables/lookupfp.js" type="text/javascript" defer></script><!--call foudation plus lookup table-->
    <script src="/lookup-tables/lookuph.js" type="text/javascript" defer></script><!--call higher lookup table-->
	<script src="/lookup-tables/lookuphp.js" type="text/javascript" defer></script><!--call higher plus lookup table-->

    </head>

        <!-- Header -->
        <header class="w3-container w3-blue w3-center" id="head">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <h1 class="w3-margin">Today's <a href="https://corbettmaths.com/" target="_blank" class="nounderline">Corbettmaths</a> Starter</h1>
        </header>

    <body style="text-align: center;" onload="footer();">
    <div class="w3-display-container" id ="display" style="height:300px;">
        <div class="w3-row">
            <div class="w3-col w3-container" id="side"></div>
            <div class="w3-col w3-container w3-animate-bottom" id="main">
                <br>
                <div class="w3-card-4" style="width:100%;">
                    <header class="w3-container w3-blue" style="height: 10px;"></header>
                    <div class="w3-container" style="padding-bottom: 40px;">
                        <h4>Click the buttons to be automatically redirected to today's starter</h4><br>
                        <button onclick="window.location = lookupn(theDay);" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;" id="n_button" class="w3-button w3-white w3-border">Numeracy</button><br> 
                        <button onclick="window.location = lookupf(theDay);" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;" id="f_button" class="w3-button w3-white w3-border">Foundation</button><br> 
                        <button onclick="window.location = lookupfp(theDay);" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;" id="fp_button" class="w3-button w3-white w3-border">Foundation Plus</button><br> 
                        <button onclick="window.location = lookuph(theDay);" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;" id="h_button" class="w3-button w3-white w3-border">Higher</button><br> 
                        <button onclick="window.location = lookuphp(theDay);" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;" id="hp_button" class="w3-button w3-white w3-border">Higher Plus</button><br><br>
                        <button onclick="window.location = 'https://starter.mctrees.net/answers';" style="width: 200px; height: 39px; -webkit-appearance: button; moz-apperance: button;"  class="w3-button w3-white w3-border">Answers</button><br> 
                    </div>
                </div>
            </div>
        </div>
    <!-- Footer -->
    <footer class="w3-container w3-animate-bottom w3-padding-32 w3-center w3-opacity ">
        <div class=" w3-padding-12">
            <div class="w3-xlarge">
                <a href="https://www.reddit.com/r/mctreesnet/"><i class="fa fa-reddit w3-hover-opacity" ></i></a>
                <a href="http://twitter.com/mctrees_hosting"><i class="fa fa-twitter w3-hover-opacity"></i></a>
                <a href="http://github.com/mctrees"><i class="fa fa-github w3-hover-opacity"></i></a>
            </div>

            <p>Copyright  <a href="https://corbettmaths.com/" target="_blank">Corbettmaths</a> and <a href="https://mctrees.net" target="_blank">McTrees</a></p>
            <p><a href="/credits">Credits</a>, <a href=https://mctrees.net/legal>Legal</a></p>
        </div>

    </footer>
    </div>
</body>

</html>
