function Popup(url, width, height, toolsInd, wname)
{
    var options = "width=" + width + ",height=" + height + ",top=" + ((screen.height - height) / 4).toString() + ",left=" + ((screen.width - width) / 2).toString();

    switch (toolsInd)
    {
        case 1:
            options += ",toolbar=no,status=no,resizable=no,scrollbars=yes";
            break;
        case 2:
            options += ",menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes";
            break;
        case 3:
            options += ",top=50,left=50,resizable=yes,scrollbars=yes,status=no,menubar=no,toolbar=no,location=yes";
            break;
        case 4:
            options += ",top=50,left=50,resizable=yes,scrollbars=no,status=no,menubar=no,toolbar=no,location=yes";
            break;            
        default:
            //do nothing
            break;
    }

    if (!wname)
    {
        wname = "SLB_Popup";
    }

    popupWindow = window.open(url, wname, options);

    if (popupWindow)
    {
        popupWindow.focus();
    }
}

function shareDigg() 
{ 
	Popup('http://digg.com/remote-submit?phase=2&url='+encodeURIComponent(document.URL)+'&title='+encodeURIComponent(GetArticleValues(2))+'&bodytext='+encodeURIComponent(GetArticleValues(3))+'&topic=world_news', 540, 500, 1, 'diggPopup');
    //alert('http://digg.com/remote-submit?phase=2&url='+encodeURIComponent(GetArticleValues(1))+'&title='+encodeURIComponent(GetArticleValues(2))+'&bodytext='+encodeURIComponent(GetArticleValues(3))+'&topic=world_news', 540, 500, 1, 'diggPopup');
}
function shareLinkedIn() 
{
	Popup('http://www.linkedin.com/shareArticle?mini=true&url='+encodeURIComponent(document.URL)+'&title='+encodeURIComponent(GetArticleValues(2))+'&summary='+encodeURIComponent(GetArticleValues(3))+'&source=WesternGeco', 520, 570, 1, 'linkedinPopup');
}
function shareDelicious() 
{
	Popup('http://del.icio.us/post?v=4&noui&jump=close&url='+encodeURIComponent(document.URL)+'&title='+encodeURIComponent(GetArticleValues(2))+'&notes='+encodeURIComponent(GetArticleValues(3))+'&tags=news', 540, 500, 1, 'deliciousPopup');
}

function shareFacebook() 
{
	Popup('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.URL)+'&t='+encodeURIComponent(GetArticleValues(2)), 626, 436, 1, 'facebookPopup');
}

function shareTwitter() {
    Popup('https://twitter.com/share?url=' + encodeURIComponent(document.URL) + '&text=' + encodeURIComponent(GetArticleValues(2)), 626, 436, 1, 'facebookPopup');
}

function sendPage(id) {
    if (id) {
        Popup('/forms/sendpage.aspx?id=' + id, 626, 436, 1, 'sendPage');
    } else {
        Popup('/forms/sendpage.aspx?url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(GetArticleValues(2)), 626, 436, 1, 'sendPage');
    }
}
