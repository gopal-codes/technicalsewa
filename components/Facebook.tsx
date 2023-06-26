import React from 'react'
import Script from 'next/script';

const Facebook = () => {
    return (
        <div>

            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat">
            </div>

            <Script strategy="lazyOnload">
                {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "112089861842498");
            chatbox.setAttribute("attribution", "biz_inbox");
            chatbox.setAttribute('title', 'Facebook iframe');
      
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v12.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        `}
            </Script>


            {/* <script>
                var chatbox = document.getElementById('fb-customer-chat');
                chatbox.setAttribute("page_id", "104933492403993");
                chatbox.setAttribute("attribution", "biz_inbox");
            </script>


            <script>
                window.fbAsyncInit = function() {
                    FB.init({
                        xfbml: true,
                        version: 'v16.0'
                    });
      };

                (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
            </script> */}
        </div>
    )
}

export default Facebook