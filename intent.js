let messages_content = $('.messages-content');
let welcome = 0;
let mainData;


$(document).ready(() => {
    $.getJSON('./skillbot.json', (response) => {
        mainData = response;
    })
});

$(window).load(function () {
    messages_content.mCustomScrollbar();
    setTimeout(function () {
        output_message();
    }, 100);
});

function updateScrollbar() {
    messages_content.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function insert_my_message() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }
    $('<div class="message message-me">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    updateScrollbar();
    setTimeout(function () {
        output_message();
    }, 1000 + (Math.random() * 20) * 100);
}

// On submit message
$('.message-submit').click(function () {
    insert_my_message();
});
$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insert_my_message();
        return false;
    }
});


function output_message() {

    $('<div class="message loading new"><div class="avatar"><img src="img/techbot.png" /></div><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    response = null;
    message_react_value = null;
    message_react_value = $('.message-input').val();
    $('.message-input').val(null);

    if (welcome == 0) {

        response = `<b>Hi</b> there, I\'m <b>TechBot</b>, i can answer any question based on my prototype, so let me give you a clue of what i can actually do. before we start. 
        What is your name?
        `;
    }

    if (welcome == 1) {
        let random = ['Nice to meet you', 'what a nice name',
            'Nice to have you here', 'what a cool name'];
        let answer = Math.floor(Math.random() * random.length);
        response = random[answer];
    }


    if (welcome > 1) {

        if (message_react_value == "0" || message_react_value == "1" || message_react_value == "2" || message_react_value == "3" ||message_react_value == "4") {

            if (message_react_value == "0") {

                response = `want to learn about ajax <a href"https://ajax.com"></a>`;
            }

            if (message_react_value == "1") {

                response = `want to learn about php <a href"https://ajax.com></a>`;
            }

            if (message_react_value == "2") {

                response = `want to learn about javascript <a href"https://javascript.com></a>`;
            }

            if (message_react_value == "3") {

                response = `want to learn about nodejs <a href"https://nodejs.com></a>`;
            }
            if (message_react_value == "4") {

                response = `Want to learn about Reactjs and Redux <a href"https://reactjs.com></a>  <a href"https://redux.com></a>`;
            }

        } else {

            response = 'Can you recap that! <br> Like I said before, here are my short codes <br><br> cocde: <br> <b>0</b>: want to learn about ajax<br> <b>1</b>: want to learn about php<br> <b>2</b>: want to learn about javascript <br> <b>3</b>: want to learn about nodejs <br> <b>4</b>: Want to learn about Reactjs and Redux';
        }
        response = `Here are some of my short cocde: <br> <b>0</b>: want to learn about ajax<br> <b>1</b>: want to learn about php<br> <b>2</b>: wnan to learn about javascript <br> <b>3</b>: want to learn about nodejs <br> <b>2</b>: Want to learn about Reactjs and Redux`;
    }

    if (response == null) {

        response = 'I hope i\'m doing as expected?  Thank you good bye';
    }

    welcome++;

    setTimeout(function () {
        $('.message.loading').remove();
        $('<div class="message new"><div class="avatar"><img src="img/techbot.png" /></div>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
        updateScrollbar();
    }, 1000 + (Math.random() * 20) * 100);

}
