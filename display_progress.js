$(function() {
    function showTooltip(x, y, contents) {
            $("#tooltip").remove();
            var $tooltip_div = $('<div id="tooltip"></div>').css({
                position: 'absolute',
                display: 'none',
                top: y + 5,
                left: x + 15,
                border: '1px solid #000',
                padding: '4px 6px',
                color: '#fff',
                'background-color': '#222',
                opacity: 0.90
            });

            edx.HtmlUtils.setHtml(
                $tooltip_div,
                edx.HtmlUtils.HTML(contents)
            );

            edx.HtmlUtils.append(
                $('body'),
                edx.HtmlUtils.HTML($tooltip_div)
            );

            $('#tooltip').fadeIn(200);
        }
        /* -------------------------------- Grade detail bars -------------------------------- */

    var series = [{
        "color": "#b72121",
        "data": [ /* data */ ],
        "label": "Test"
    }, {
        "color": "#600101",
        "data": [
            [86.75, 0.0]
        ],
        "label": "Final Test"
    }, {
        "color": "#b72121",
        "data": [ /* data */ ],
        "label": "Test-grade_breakdown"
    }];

    // <-- my code here

    let myData = [
        [01, 1.0],
        [02, 1.0],
        [03, 1.0],
        [04, 1.0],
        [05, 1.0],
        [06, 1.0],
        [07, 1.0],
        [08, 1.0],
        [09, 1.0],
        [10, 1.0],
        [11, 1.0],
        [12, 1.0],
        [13, 1.0],
        [14, 1.0],
        [15, 1.0],
        [16, 1.0],
        [17, 1.0],
        [18, 1.0],
        [19, 1.0],
        [20, 1.0],
        [21, 1.0],
        [22, 1.0],
        [23, 1.0],
        [24, 1.0],
        [25, 1.0],
        [26, 1.0],
        [27, 1.0],
        [28, 1.0],
        [29, 1.0],
        [30, 1.0],
        [31, 1.0],
        [32, 1.0],
        [33, 1.0],
        [34, 1.0],
        [35, 1.0],
        [36, 1.0],
        [37, 1.0],
        [38, 1.0],
        [39, 1.0],
        [40, 1.0],
        [41, 1.0],
        [42, 1.0],
        [43, 1.0],
        [44, 1.0],
        [45, 1.0],
        [46, 1.0],
        [47, 1.0],
        [48, 1.0],
        [49, 1.0],
        [50, 1.0],
        [51, 1.0],
        [52, 1.0],
        [53, 1.0],
        [54, 1.0],
        [55, 1.0],
        [56, 1.0],
        [57, 1.0],
        [58, 1.0],
        [59, 1.0],
        [60, 1.0],
        [61, 1.0],
        [62, 1.0],
        [63, 1.0],
        [64, 1.0],
        [65, 1.0],
        [66, 1.0],
        [67, 1.0],
        [68, 1.0],
        [69, 1.0],
        [70, 1.0],
        [71, 1.0],
        [72, 1.0],
        [73, 1.0],
        [74, 1.0],
        [75, 1.0],
        [76, 1.0],
        [77, 1.0],
        [78, 1.0],
        [79, 1.0],
        [80, 1.0],
        [81, 1.0],
        [82, 1.0],
        [83, 1.0],
        [84, 1.0],
        [85.25, 1.0]
    ];

    // подмена данных о студенте
    let student = '__STUDENT_NICK__';
    let email = '__STUDENT_MAIL__'
    let progressTitle = document.querySelector('.progress-certificates-title');
    progressTitle.textContent = "Course Progress for Student '" + student + "' (" + email + ")";

    // подмена данных выше (костыль с константами)

    // всего заданий
    var totalCount = 84;
    // процент успешных (от 0 до 1)
    var completePercent = parseFloat('__COMPLETE_PERCENT__');
    // кол-во пройденных тем (считается из процента выше)
    var completeCount = parseInt(completePercent * totalCount);


    for (var i = completeCount; i < totalCount; i++) {
        myData[i] = [i, 0.0];
    }
    var totalSum = 0;
    for (let i = 0; i < totalCount; i++) {
        totalSum += parseFloat(myData[i][1]);
    }
    myData[myData.length - 1] = [85.25, totalSum / totalCount];

    series[0]["data"] = myData;
    series[2]["data"] = [[88.25, totalSum / totalCount * 0.7]];

    // костыль, который синхронизирует баллы в табличке с графиком
    let totalScore = document.querySelector('.grade-category-detail-table > tbody > tr:first-of-type > td:nth-of-type(3)');
    totalScore.textContent = (parseFloat(myData[myData.length - 1][1]) * 100).toFixed(2);

    // синхронизация новых отметок в таблице с их надписями
    let markMins = document.querySelectorAll('.grade-category-detail-table > tbody > tr > td:nth-of-type(2)');
    let markScores = document.querySelectorAll('.grade-category-detail-table > tbody > tr > td:nth-of-type(3)');
    let markLabels = document.querySelectorAll('.grade-category-detail-table > tbody > tr > td:nth-of-type(4)');
    for (let i = 0; i < markScores.length; i++) {
        var markMin = markMins[i];
        var score = markScores[i];
        var label = markLabels[i];

        label.classList.remove('pass');
        label.classList.remove('fail');

        if (parseFloat(score.textContent) >= parseFloat(markMin.textContent)) {
            label.textContent = "Pass";
            label.classList.add('pass');
        } else {
            label.textContent = "Not Pass";
            label.classList.add('fail');
        }
    }

    // end of my code

    var ticks = [
        [1, "T 01"],
        [2, "T 02"],
        [3, "T 03"],
        [4, "T 04"],
        [5, "T 05"],
        [6, "T 06"],
        [7, "T 07"],
        [8, "T 08"],
        [9, "T 09"],
        [10, "T 10"],
        [11, "T 11"],
        [12, "T 12"],
        [13, "T 13"],
        [14, "T 14"],
        [15, "T 15"],
        [16, "T 16"],
        [17, "T 17"],
        [18, "T 18"],
        [19, "T 19"],
        [20, "T 20"],
        [21, "T 21"],
        [22, "T 22"],
        [23, "T 23"],
        [24, "T 24"],
        [25, "T 25"],
        [26, "T 26"],
        [27, "T 27"],
        [28, "T 28"],
        [29, "T 29"],
        [30, "T 30"],
        [31, "T 31"],
        [32, "T 32"],
        [33, "T 33"],
        [34, "T 34"],
        [35, "T 35"],
        [36, "T 36"],
        [37, "T 37"],
        [38, "T 38"],
        [39, "T 39"],
        [40, "T 40"],
        [41, "T 41"],
        [42, "T 42"],
        [43, "T 43"],
        [44, "T 44"],
        [45, "T 45"],
        [46, "T 46"],
        [47, "T 47"],
        [48, "T 48"],
        [49, "T 49"],
        [50, "T 50"],
        [51, "T 51"],
        [52, "T 52"],
        [53, "T 53"],
        [54, "T 54"],
        [55, "T 55"],
        [56, "T 56"],
        [57, "T 57"],
        [58, "T 58"],
        [59, "T 59"],
        [60, "T 60"],
        [61, "T 61"],
        [62, "T 62"],
        [63, "T 63"],
        [64, "T 64"],
        [65, "T 65"],
        [66, "T 66"],
        [67, "T 67"],
        [68, "T 68"],
        [69, "T 69"],
        [70, "T 70"],
        [71, "T 71"],
        [72, "T 72"],
        [73, "T 73"],
        [74, "T 74"],
        [75, "T 75"],
        [76, "T 76"],
        [77, "T 77"],
        [78, "T 78"],
        [79, "T 79"],
        [80, "T 80"],
        [81, "T 81"],
        [82, "T 82"],
        [83, "T 83"],
        [84, "T 84"],
        [85.25, "T Avg"],
        [86.75, "FT"],
        [88.25, "Total"]
    ];
    var bottomTicks = [];
    var detail_tooltips = {
        "Test": ["Test 1 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 2 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 3 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 4 - \u0422\u0435\u0441\u0442 4 - 100% (3/3)", "Test 5 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 6 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 7 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 8 - \u0422\u0435\u0441\u0442 1 - 100% (1/1)", "Test 9 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 10 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 11 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 12 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 13 - \u0422\u0435\u0441\u0442 4 - 55% (6/11)", "Test 14 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 15 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 16 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 17 - \u0422\u0435\u0441\u0442 4 - 100% (1/1)", "Test 18 - \u0422\u0435\u0441\u0442 5 - 100% (1/1)", "Test 19 - \u0422\u0435\u0441\u0442 1 - 100% (1/1)", "Test 20 - \u0422\u0435\u0441\u0442 2 - 100% (5/5)", "Test 21 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 22 - \u0422\u0435\u0441\u0442 4 - 17% (1/6)", "Test 23 - \u0422\u0435\u0441\u0442 5 - 100% (4/4)", "Test 24 - \u0422\u0435\u0441\u0442 6 - 100% (2/2)", "Test 25 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 26 - \u0422\u0435\u0441\u0442 2 - 100% (4/4)", "Test 27 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 28 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 29 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 30 - \u0422\u0435\u0441\u0442 3 - 80% (4/5)", "Test 31 - \u0422\u0435\u0441\u0442 4 - 100% (2/2)", "Test 32 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 33 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 34 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 35 - \u0422\u0435\u0441\u0442 2 - 100% (3/3)", "Test 36 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 37 - \u0422\u0435\u0441\u0442 4 - 100% (1/1)", "Test 38 - \u0422\u0435\u0441\u0442 5 - 100% (3/3)", "Test 39 - \u0422\u0435\u0441\u0442 1 - 100% (4/4)", "Test 40 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 41 - \u0422\u0435\u0441\u0442 3 - 100% (4/4)", "Test 42 - \u0422\u0435\u0441\u0442 1 - 100% (1/1)", "Test 43 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 44 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 45 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 46 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 47 - \u0422\u0435\u0441\u0442 3 - 100% (4/4)", "Test 48 - \u0422\u0435\u0441\u0442 4 - 100% (3/3)", "Test 49 - \u0422\u0435\u0441\u0442 1 - 80% (4/5)", "Test 50 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 51 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 52 - \u0422\u0435\u0441\u0442 4 - 100% (1/1)", "Test 53 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 54 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 55 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 56 - \u0422\u0435\u0441\u0442 1 - 100% (4/4)", "Test 57 - \u0422\u0435\u0441\u0442 2 - 100% (3/3)", "Test 58 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 59 - \u0422\u0435\u0441\u0442 4 - 100% (4/4)", "Test 60 - \u0422\u0435\u0441\u0442 5 - 100% (1/1)", "Test 61 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 62 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 63 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 64 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 65 - \u0422\u0435\u0441\u0442 3 - 100% (2/2)", "Test 66 - \u0422\u0435\u0441\u0442 4 - 100% (1/1)", "Test 67 - \u0422\u0435\u0441\u0442 5 - 100% (1/1)", "Test 68 - \u0422\u0435\u0441\u0442 1 - 100% (1/1)", "Test 69 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 70 - \u0422\u0435\u0441\u0442 3 - 100% (3/3)", "Test 71 - \u0422\u0435\u0441\u0442 4 - 100% (1/1)", "Test 72 - \u0422\u0435\u0441\u0442 1 - 100% (2/2)", "Test 73 - \u0422\u0435\u0441\u0442 2 - 100% (2/2)", "Test 74 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 75 - \u0422\u0435\u0441\u0442 1 - 100% (1/1)", "Test 76 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test 77 - \u0422\u0435\u0441\u0442 3 - 100% (1/1)", "Test 78 - \u0422\u0435\u0441\u0442 4 - 100% (2/2)", "Test 79 - \u0422\u0435\u0441\u0442 5 - 100% (2/2)", "Test 80 - \u0422\u0435\u0441\u0442 - 100% (1/1)", "Test 81 - \u0422\u0435\u0441\u0442 - 100% (1/1)", "Test 82 - \u0422\u0435\u0441\u0442 - 100% (1/1)", "Test 83 - \u0422\u0435\u0441\u0442 1 - 100% (3/3)", "Test 84 - \u0422\u0435\u0441\u0442 2 - 100% (1/1)", "Test Average = 98%"],
        "Test-grade_breakdown": ["Test = 68.59% of a possible 70.00%"],
        "Final Test": ["Final Test = 0%"],
        "Dropped Scores": []
    };
    var droppedScores = [];
    var grade_cutoff_ticks = [
        [1, "100%"],
        [0, "0%"],
        [0.85, "\u041e\u0442\u043b\u0438\u0447\u043d\u043e 85%"],
        [0.65, "\u0425\u043e\u0440\u043e\u0448\u043e 65%"],
        [0.5, "\u0423\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e 50%"]
    ]

    var yAxisTooltips = {};

    /*
    series looks like:
    [
        {
            color: "#600101",
            label: "Homework",
            data: [[1, 0.06666666666666667], [2, 1], [3.25, .53]]
        },
        ...
    ]

    detail_tooltips looks like:
    {
        "Dropped Scores": [0: "The lowest 1...:],
        "Homework": [
            0: "Homework 1 -- Homework -- Question Styles 7% (1/15)",
            1: "Homework 2 -- Homework -- Get Social 100% (1/1)",
            2: "Homework Average = 53%"
        ],
        ...
    }
    */

    // loop through the series and extract the matching tick and the series label
    for (var seriesIndex = 0; seriesIndex < series.length; seriesIndex++) {
        for (var dataIndex = 0; dataIndex < series[seriesIndex]['data'].length; dataIndex++) {
            var tickIndex = series[seriesIndex]['data'][dataIndex][0];
            // There may be more than one detail tooltip for a given tickIndex. If so,
            // push the new tooltip on the existing list.
            if (tickIndex in yAxisTooltips) {
                yAxisTooltips[tickIndex].push(detail_tooltips[series[seriesIndex]['label']][dataIndex]);
            } else {
                yAxisTooltips[tickIndex] = [detail_tooltips[series[seriesIndex]['label']][dataIndex]];
            }
            // If this item was a dropped score, add the tooltip message about that.
            for (var droppedIndex = 0; droppedIndex < droppedScores.length; droppedIndex++) {
                if (tickIndex === droppedScores[droppedIndex][0]) {
                    yAxisTooltips[tickIndex].push(detail_tooltips["Dropped Scores"][droppedIndex]);
                }
            }
        }
    }

    // hide the vertical axis since they are audibly lacking context
    for (var i = 0; i < grade_cutoff_ticks.length; i++) {
        grade_cutoff_ticks[i][1] = edx.HtmlUtils.joinHtml(
            edx.HtmlUtils.HTML('<span aria-hidden="true">'),
            grade_cutoff_ticks[i][1],
            edx.HtmlUtils.HTML('</span>')
        ).text;
    }

    //Always be sure that one series has the xaxis set to 2, or the second xaxis labels won't show up
    series.push({
        label: 'Dropped Scores',
        data: droppedScores,
        points: {
            symbol: "cross",
            show: true,
            radius: 3
        },
        bars: {
            show: false
        },
        color: "#333"
    });

    // Allow for arbitrary grade markers e.g. ['A', 'B', 'C'], ['Pass'], etc.
    var ascending_grades = grade_cutoff_ticks.map(function(el) {
        return el[0];
    }); // Percentage point (in decimal) of each grade cutoff
    ascending_grades.sort();

    var colors = ['#f3f3f3', '#e9e9e9', '#ddd'];
    var markings = [];
    for (let i = 1; i < ascending_grades.length - 1; i++) // Skip the i=0 marking, which starts from 0%
        markings.push({
        yaxis: {
            from: ascending_grades[i],
            to: ascending_grades[i + 1]
        },
        color: colors[(i - 1) % colors.length]
    });

    var options = {
        series: {
            stack: true,
            lines: {
                show: false,
                steps: false
            },
            bars: {
                show: true,
                barWidth: 0.8,
                align: 'center',
                lineWidth: 0,
                fill: .8
            }
        },
        xaxis: {
            tickLength: 0,
            min: 0.0,
            max: 89.25,
            ticks: function() {
                for (var i = 0; i < ticks.length; i++) {
                    var tickLabel = edx.HtmlUtils.joinHtml(
                        // The very last tick will be for the total, and it usually is composed of a number of different
                        // grading types. To help clarify, do NOT make the label ("Total") aria-hidden in that case.
                        edx.HtmlUtils.HTML(i < ticks.length - 1 ? '<span aria-hidden="true">' : '<span>'),
                        ticks[i][1],
                        edx.HtmlUtils.HTML('</span>')
                    );
                    var elementTooltips = yAxisTooltips[ticks[i][0]];
                    if (elementTooltips) {
                        for (var tooltipIndex = 0; tooltipIndex < elementTooltips.length; tooltipIndex++) {
                            tickLabel = edx.HtmlUtils.joinHtml(
                                tickLabel,
                                edx.HtmlUtils.HTML('<span class="sr">'),
                                elementTooltips[tooltipIndex],
                                edx.HtmlUtils.HTML('<br></span>')
                            );
                        }
                    }
                    ticks[i][1] = tickLabel;
                }
                return ticks;
            },
            labelAngle: 90
        },
        yaxis: {
            ticks: grade_cutoff_ticks,
            min: 0.0,
            max: 1.0,
            labelWidth: 100
        },
        grid: {
            hoverable: true,
            clickable: true,
            borderWidth: 1,
            markings: markings
        },
        legend: {
            show: false
        }
    };

    var $grade_detail_graph = $("#grade\u002Ddetail\u002Dgraph");
    if ($grade_detail_graph.length > 0) {
        var plot = $.plot($grade_detail_graph, series, options);

        var o = plot.pointOffset({
            x: 88.25,
            y: 0.69
        });

        edx.HtmlUtils.append(
            $grade_detail_graph,
            edx.HtmlUtils.joinHtml(
                // xss-lint: disable=javascript-concat-html
                edx.HtmlUtils.HTML('<div class="overallGrade" style="position:absolute;left:' + (o.left - 12) + 'px;top:' + (o.top - 20) + 'px">'),
                edx.HtmlUtils.HTML('<span class=sr>'),
                gettext('Overall Score'),
                edx.HtmlUtils.HTML('<br></span>'),
                '',
                edx.HtmlUtils.HTML('</div>')
            )
        );


        $grade_detail_graph.find('.xAxis .tickLabel').attr('tabindex', '0').focus(function(event) {
            var $target = $(event.target),
                srElements = $target.find('.sr'),
                srText = "",
                i;
            if (srElements.length > 0) {
                for (i = 0; i < srElements.length; i++) {
                    srText += srElements[i].innerHTML;
                }
                // Position the tooltip slightly above the tick label.
                showTooltip($target.offset().left - 70, $target.offset().top - 120, srText);
            }
        });

        $grade_detail_graph.focusout(function() {
            $("#tooltip").remove();
        });
    }


    var previousPoint = null;
    $grade_detail_graph.bind("plothover", function(event, pos, item) {
        if (item) {
            if (previousPoint != (item.dataIndex, item.seriesIndex)) {
                previousPoint = (item.dataIndex, item.seriesIndex);

                if (item.series.label in detail_tooltips) {
                    var series_tooltips = detail_tooltips[item.series.label];
                    if (item.dataIndex < series_tooltips.length) {
                        showTooltip(item.pageX, item.pageY, series_tooltips[item.dataIndex]);
                    }
                }

            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
});