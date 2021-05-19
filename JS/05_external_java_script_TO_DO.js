/**
 * Created by vivekkulkarni on 7/19/16.
 */

function hideAndSeekContent(btn,id,ele,flag){
    //TODO #1 dispaly button with given id
	var i=document.getElementById(id);
	i.style.display="block";

    if(!flag) {

       //TODO #2 hide the current btn
		btn.style.display="block";

        //TODO#3 show content of the element(ele)
		ele.style.display='block';

    }else {
        //TODO #4 hide the current btn
		btn.style.display="none";

        //TODO#5 hide content of the element(ele)
		ele.style.display='none';

    }
}
