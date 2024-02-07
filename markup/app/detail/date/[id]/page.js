"use client";

import ContentsWrap from "@/app/components/ContentsWrap";
export default function page(props) {
  const data = [
    {
      title: "Date01",
      cssFile: ["css/jquery-ui.min.css"],
      jsFile: [
        "js/jquery.min.js",
        "js/jquery-ui.min.js",
      ],
      img: "category/img_date01.svg",
      html: `
<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;gap: 16px;">
  <div>
    <p style="text-align: center;">싱글</p>
    <input class="datepicker s__input s__date" type="text" placeholder="YYYY-MM-DD" autocomplete='off'>
  </div>
  <div style="max-width:90%">
    <p style="text-align: center;">멀티</p>
    <div class="range-date-wrap">
        <input class="s__input s__date" id="from" type="text" placeholder="YYYY-MM-DD" autocomplete='off'>
        <p>~</p>
        <input class="s__input s__date" id="to" type="text" placeholder="YYYY-MM-DD" autocomplete='off'>
    </div>
  </div>
</div>
      `,
      css: `
.range-date-wrap{
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.s__date{
  background: url(/image/icon_date.svg) no-repeat 97% 50%/18px auto;
}
/* 데이트피커 커스텀 */
.ui-widget.ui-widget-content{
  border-radius: 8px;
  border-color: #e8e8e8;
  padding: 16px;
}
.ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next{
  border: 1px solid #fff;
}
.ui-widget-header .ui-datepicker-next .ui-icon{
  background-image: url(/image/icon_right_arrow.svg);
  background-size: contain;
}
.ui-widget-header .ui-datepicker-prev .ui-icon{
  background-image: url(/image/icon_left_arrow.svg);
  background-size: contain;
}
.ui-widget-header
.ui-icon-circle-triangle-e, .ui-icon-circle-triangle-w{
  background-position: 0%;
  cursor: pointer;
}
.ui-widget-header{
  border: 0;
  background-color: #fff;
}
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active{
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
}
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight{
  background-color: #f7f7f7;
  border-radius: 100%;
  color: #454545;
}
.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active, a.ui-button:active, .ui-button:active, .ui-button.ui-state-active:hover{
  background-color: #007fff;
  color: #fff;
  border-radius: 100%;
}
.ui-datepicker td span, .ui-datepicker td a{
  width: 32px;
  height: 32px;
}
      `,
      js: `

//jquery.min.js > js/jquery-ui.min.js 순서로 적용해주세요.

$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년'
});
//기본
$(function () {
  $('.datepicker').datepicker();
});

//레인지
$( function() {
  var dateFormat = 'yy-mm-dd',
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );
      
      `,
      download: [{ name: "Date01", link: "/download/datepicker.zip" }],
    },
    {
      title: "Date02",
      cssFile: ["css/daterangepicker.css"],
      jsFile: [
        "js/jquery.min.js",
        "js/moment.min.js",
        "js/daterangepicker.min.js",
      ],
      img: "category/img_date02.svg",
      html: `
  <div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;gap: 16px;">
    <div>
      <p style="text-align: center;">싱글</p>
      <div class="s__date-wrap">
        <input type="text" class="s__input s__date">
      </div>
    </div>
    <div>
      <p style="text-align: center;">멀티</p>
      <div class="s__date-wrap">
        <input type="text" name="daterange" class="s__input s__date-range" value="" />
      </div>
    </div>
  </div>
      `,
      css: `
/* 데이트피커 */
.s__date, .s__date-range{
    background: url(/image/icon_date.svg) no-repeat 97% 50%/18px auto;
}

      `,
      js: `
// 데이트피커
// https://www.daterangepicker.com/#config

//적용시 js순서를 잘 지켜주세요! jquery > moment > daterangepicker 순서입니다!

// 싱글 데이트피커
$(".s__date").daterangepicker(
  {
    singleDatePicker: true,
    minYear: 1000,
    maxYear: 9999,
    locale: {
      format: "YYYY-MM-DD",
      separator: " ~ ",
      applyLabel: "확인",
      cancelLabel: "취소",
      fromLabel: "From",
      toLabel: "To",
      customRangeLabel: "Custom",
      weekLabel: "주",
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      firstDay: 1,
    },
  },
  function (start, end, label) {
    console.log(
      "New date range selected: " +
        start.format("YYYY-MM-DD") +
        " to " +
        end.format("YYYY-MM-DD") +
        " (predefined range: " +
        label +
        ")"
    );
  }
);
// 멀티 데이트피커
$(".s__date-range").daterangepicker(
  {
    minYear: 1000,
    maxYear: 9999,
    locale: {
      format: "YYYY-MM-DD",
      separator: " ~ ",
      applyLabel: "확인",
      cancelLabel: "취소",
      fromLabel: "From",
      toLabel: "To",
      customRangeLabel: "Custom",
      weekLabel: "주",
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      firstDay: 1,
    },
  },
  function (start, end, label) {
    console.log(
      "New date range selected: " +
        start.format("YYYY-MM-DD") +
        " to " +
        end.format("YYYY-MM-DD") +
        " (predefined range: " +
        label +
        ")"
    );
  }
);
      `,
      download: [{ name: "Date02", link: "/download/date.zip" }],
    },
  ];

  return (
    <>
      <ContentsWrap props={props} data={data} />
    </>
  );
}
