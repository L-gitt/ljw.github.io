$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
    echarts_2();
    echarts_3();
    echarts_4();
    echarts_6();
    echarts_7();
    echarts_8();
    echarts_9();
    echarts_10();
    echarts_11();
    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            grid: {
                left: '20%',
                right: '8%',
            },
            legend: {
                show: true,
                icon: 'circle',
                top: '13%',
                itemWidth: 6,
                itemHeight: 6,
                itemGap: 25,
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: [{
                type: 'category',
                data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#fff'
                    },
                    margin: 15
                },
                boundaryGap: false
            }],
            yAxis: [{
                type: 'value',
                min: 1000000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '专利申请数(项)',
                type: 'line',
                data: [2798500, 3464824, 3697845, 4323112, 4380468, 5194154, 5243592, 5364639, 5561990],
                symbolSize: 3,
                symbol: 'circle',
                smooth: true,
                lineStyle: {
                    color: '#fe9a8b'
                },
                itemStyle: {
                    normal: {
                        color: '#fe9a8b',
                        borderColor: '#fe9a8b'
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fe9a8bb3'
                            },
                            {
                                offset: 1,
                                color: '#fe9a8b03'
                            }
                        ])
                },
                emphasis: {
                    itemStyle: {
                        color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                        offset: 0,
                                        color: '#fe9a8b'
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#fe9a8b'
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#fff'
                                    }, {
                                        offset: 0.7,
                                        color: '#fff'
                                    }, {
                                        offset: 0.8,
                                        color: '#fff'
                                    }, {
                                        offset: 1,
                                        color: '#fff'
                                    }
                                ]
                            },
                            borderColor: '#fe9a8b',
                            borderWidth: 1
                    }
                }
            },{
                name: '专利申请授权数(项)',
                type: 'line',
                data: [1718192, 1753763, 1836434, 2447460, 2591607, 3639268, 4601457, 4323409, 3649072],
                symbolSize: 3,
                symbol: 'circle',
                smooth: true,
                lineStyle: {
                    color: '#9E87FF'
                },
                itemStyle: {
                    normal: {
                        color: '#9E87FF',
                        borderColor: '#9E87FF'
                    }
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#9E87FFb3'
                        },
                        {
                            offset: 1,
                            color: '#9E87FF03'
                        }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                    offset: 0,
                                    color: '#9E87FF'
                                },
                                {
                                    offset: 0.4,
                                    color: '#9E87FF'
                                },
                                {
                                    offset: 0.5,
                                    color: '#fff'
                                }, {
                                    offset: 0.7,
                                    color: '#fff'
                                }, {
                                    offset: 0.8,
                                    color: '#fff'
                                }, {
                                    offset: 1,
                                    color: '#fff'
                                }
                            ]
                        },
                        borderColor: '#9E87FF',
                        borderWidth: 1
                    }
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));
        
        // 配置项
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>数量: {c}'
            },
            visualMap: {
                min: 0,
                max: 12,
                text: ['高', '低'],
                textStyle: {
                    color: '#fff'
                },
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#e34a33']
                },
                left: 'left',
                top: 'center',
                orient: 'vertical'
            },
            series: [{
                name: '数据',
                type: 'map',
                map: '江苏',
                roam: true,
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {name: '南京市', value: 12},
                    {name: '无锡市', value: 2},
                    {name: '苏州市', value: 6}
                ],
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));
        
        // 配置项
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>数量: {c}'
            },
            visualMap: {
                min: 0,
                max: 24,
                text: ['高', '低'],
                textStyle: {
                    color: '#fff'
                },
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['#e0f3db', '#a8ddb5', '#4eb3d3', '#08589e', '#313695']
                },
                left: 'right',
                top: 'center',
                orient: 'vertical'
            },
            series: [{
                name: '数据',
                type: 'map',
                map: '浙江',
                roam: true,
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    {name: '台州市', value: 1},
                    {name: '杭州市', value: 24},
                    {name: '湖州市', value: 1}
                ],
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['高技术产业专利申请数(大中型工业企业口径)','高技术产业有效发明专利数(大中型工业企业口径)'],
            textStyle:{
            color:"#fff"
            }
            },
            grid: {
                left: '18%',
                top: '28%',
                right: '4%',
                bottom: '20%',
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : [2015,2016,2017,2018,2019,2020,2021,2022,2023],
                axisTick: {
                    show: true //隐藏X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac" //X轴文字颜色
                    }
                },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    nameTextStyle: {
                        color: "#ebf8ac"
                        },           
                        axisLabel : {
                        formatter: '{value}℃'
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac"
                        }
                    },
                    splitLine: {
                    lineStyle: {
                        type: 'dashed',
                        color: '#DDD'
                    }
                },
                }
            ],
            series : [
                {
                    name:'高技术产业专利申请数(大中型工业企业口径)',
                    type:'line',
                    data:[158463, 131680, 158354, 179600, 199660, 348522, 397524, 434039, 444950],
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
        
                                colorStops: [{
                                        offset: 0,
                                        color: '#AAF487' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 5,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                            shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true,
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'高技术产业有效发明专利数(大中型工业企业口径)',
                    type:'line',
                    data:[241404, 257234, 306431, 327965, 365523, 570905, 685428, 809824, 892210],
                    lineStyle: {
                        normal: {
                            width: 2,
                            color: {
                                type: 'linear',
        
                                colorStops: [{
                                        offset: 0,
                                        color: '#F6D06F' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.4,
                                        color: '#F9A589' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#F9A589' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(249,165,137, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#F6D06F',
                            borderWidth: 5,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                            shadowBlur: 100,*/
                            borderColor: "#F6D06F"
                        }
                    },
                    smooth: true,
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
   function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));
    var indicators = [
        { name: 'R&D人员全时当量(万人年)', max: 200 },
        { name: 'R&D机构数(个)', max: 30000 },
        { name: 'R&D经费(亿元)', max: 8000 }
    ];
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                // params.data 是当前系列的所有数据
                var seriesName = params.seriesName;
                var data = params.data;
                var result = `${seriesName}<br/>`;

                // 遍历每个指标和对应的值
                for (var i = 0; i < indicators.length; i++) {
                    result += `${indicators[i].name}: ${data[i].toFixed(1)}<br/>`;
                }
                return result;
            }
        },
        legend: {
            data: ['2023年数据', '2015年数据'],
            bottom: 10,
            textStyle: {
                color: '#8bd46e',
                fontSize: 12
            }
        },
        radar: {
            indicator: [
                { name: 'R&D人员全时当量(万人年)', max: 400 },
                { name: 'R&D机构数(个)', max: 30000 },
                { name: 'R&D经费(亿元)', max: 8000 }
            ],
            shape: 'polygon',
            center: ['50%', '50%'],
            radius: '65%',
            axisName: {
                formatter: function(name) {
                    return name;
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(255, 255, 255, 0.15)']
                }
            }
        },
        series: [
            {
                type: 'radar',
                name: '2023年数据',
                data: [
                    [139.8, 25821, 6960.2] // 2023年的数据
                ],
                lineStyle: {
                    width: 2,
                    color: '#1f77b4',
                    type: 'solid'
                },
                areaStyle: {
                    opacity: 0.3,
                    color: '#00F5FF'
                },
            },
            {
                type: 'radar',
                name: '2015年数据',
                data: [
                    [72.7, 11265, 2626.7] // 2023年的数据
                ],
                lineStyle: {
                    width: 2,
                    color: '#1f77b4',
                    type: 'solid'
                },
                areaStyle: {
                    opacity: 0.3,
                    color: '#8bd46e'
                },
            }
        ]

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}
    function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart7'));
        // 准备数据
        // 数据准备
        var schools = ['南京大学', '东南大学', '浙江大学'];
        var indicators = [
            { name: '一级学科硕士点（个）', max: 60 },
            { name: '一级学科博士点（个）', max: 70 },
            { name: '在读研究生数量（人）', max: 50000 }
        ];
        var data = [
            [4, 43, 29335],  // 南京大学
            [52, 41, 21634], // 东南大学
            [58, 62, 49537]  // 浙江大学
        ];

        // 配置项
        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var school = schools[params.seriesIndex];
                    var value = data[params.seriesIndex][params.dataIndex];
                    var indicator = indicators[params.dataIndex].name;
                    return `${school}<br/>${indicator}: ${value}`;
                }
            },
            legend: {
                data: schools,
                bottom: 10,
                textStyle: {
                    color: '#fff'
                },
            },
            radar: {
                indicator: indicators,
                radius: '65%',
                axisName: {
                    formatter: function(name, indicator) {
                        return '{title|' + name + '}';
                    },
                    rich: {
                        title: {
                            fontSize: 12,
                            lineHeight: 16
                        }
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(255, 255, 255, 0.15)']
                    }
                }
            },
            series: [{
                type: 'radar',
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                },
                data: schools.map((school, index) => ({
                    value: data[index],
                    name: school,
                    lineStyle: { width: 2 },
                    areaStyle: { 
                        opacity: 0.3,
                        color: ['#4A99FF', '#4BFFFC', '#6A5ACD'][index]
                    }
                }))
            }],
            color: ['#4A99FF', '#4BFFFC', '#6A5ACD']  // 使用科技蓝配色
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_8() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart8'));

        // 配置项
        option = option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
            }, 
            grid: {
                left: '12%',
                right: '12%',
                top: '25%',
                bottom: '1%',
            },
            legend: {
                data: ['人员全时当量(万人年)', '经费支出(亿元)', '发表科技论文(万篇)', '科技成果登记数(项)', '人员全时当量增率', '经费支出增率', '发表科技论文增率', '科技成果登记数增率'],
                right: 'center', width: '100%',
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
            },
            xAxis: [
                {
                    type: "category",
                    data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                    axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
                    axisLabel: {
                        textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14'},
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    axisTick: { show: false },
                    splitLine: {
                        show: false,

                    },
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        color: "rgba(255,255,255,.6)"

                    },
                    axisLine: {
                        min: 0,
                        max: 10,
                        lineStyle: { color: 'rgba(255,255,255,.1)' }
                    },//左线色

                },
                {
                    type: "value",
                    name: "增长率",
                    show: true,
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        formatter: "{value} %",
                        color: "rgba(255,255,255,.6)"
                    },
                    axisTick: { show: false },
                    axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
                    splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
                },
            ],
            series: [
                {
                    name: "人员全时当量(万人年)",
                    type: "bar",
                    data: [375.88, 387.81, 403.36, 438.14, 480.08, 523.45, 571.6, 635.4, 724.1],
                    barWidth: "15%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#8bd46e'
                            }, {
                                offset: 1,
                                color: '#09bcb7'
                            }]),
                        }
                    },
                    barGap: "0.2"
                },
                {
                    name: "经费支出(亿元)",
                    type: "bar",
                    data: [14169.88, 15676.75, 17606.13, 19677.93, 22143.6, 24393.11, 27956.31, 30782.9, 33357.1],
                    barWidth: "15%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            }, {
                                offset: 1,
                                color: '#6851f1'
                            }]),
                        }
                    },
                    barGap: "0.2"
                },
                {
                    name: "发表科技论文(万篇)",
                    type: "bar",
                    data: [164, 165, 170.09, 184.36, 195, 195.17, 203, 215, 217],
                    barWidth: "15%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fccb05'
                            }, {
                                offset: 1,
                                color: '#f5804d'
                            }]),
                        }
                    },
                    barGap: "0.2"
                },
                {
                    name: "科技成果登记数(项)",
                    type: "bar",
                    data: [55284, 58779, 59792, 65720, 68562, 76521, 78655, 84324, 93406],
                    barWidth: "15%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ff9a9e'
                            }, {
                                offset: 1,
                                color: '#fad0c4'
                            }]),
                        }
                    },
                    barGap: "0.2"
                },
                {
                    name: "人员全时当量增率",
                    type: "line",
                    smooth: true,
                    yAxisIndex: 1,
                    data: [0.012989, 0.031739, 0.040097, 0.086226, 0.095723, 0.090339, 0.091986, 0.111617, 0.139597],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            "color": "#86d370",

                        }
                    },

                }
                ,
                {
                    name: "经费支出增率", 
                    type: "line",
                    yAxisIndex: 1,
                    data: [0.088681, 0.106343, 0.123073, 0.117675, 0.125301, 0.101587, 0.146074, 0.101107, 0.083624],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        "normal": {
                            "color": "#3496f8",

                        }
                    },
                    smooth: true
                },
                {
                    name: "发表科技论文增率", 
                    type: "line",
                    yAxisIndex: 1,
                    data: [0.044585, 0.063219, 0.030848, 0.083897, 0.057713, 0.000872, 0.040119, 0.059113, 0.009302],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        "normal": {
                            "color": "#fbc30d",

                        }
                    },
                    smooth: true
                },
                {
                    name: "科技成果登记数增率", 
                    type: "line",
                    yAxisIndex: 1,
                    data: [0.040346, 0.006098, 0.017234, 0.099144, 0.043244, 0.116085, 0.027888, 0.072074, 0.107704],
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        "normal": {
                            "color": "#ff9a9e",

                        }
                    },
                    smooth: true
                }
            ]
        };;

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_9() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart9'));
        // 配置项
        option = {
            tooltip: {
                show: true,
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: false
            },
            grid: [{
                show: false,
                left: '20%',
                right: '40%',
                top: '15%',
                bottom: '5%'
            }, {
                show: false,
                left: '6%',
                top: '15%',
                bottom: '5%',
                width: '0%',
            }, {
                show: false,
                left: '60%',
                top: '15%',
                bottom: '5%',
                width: '40%',
            }],
            xAxis: [{
                type: 'value',
                inverse: true,
                axisLabel: {
                    show: true,
                    color: '#979797',
                    margin: 0
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }, {
                gridIndex: 1,
                show: true,
                axisLabel: {
                    color: '#979797',
                    margin: 0
                },
                splitLine: {
                    lineStyle: {
                        color: '#979797',
                        type: 'dashed'
                    }
                }
            }, {
                gridIndex: 2,
                type: 'value',
                axisLabel: {
                    show: true,
                    color: '#979797',
                    margin: 0
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            yAxis: [
                {
                    type: 'category',
                    inverse: false,
                    position: 'right',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#979797'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['第一产业','第二产业','第三产业']
                },
                {
                    type: 'category',
                    inverse: false,
                    gridIndex: 1,
                    position: 'left',
                    axisLabel: {
                        align: 'left',
                        padding: [8, 0, 0, 0],
                        fontSize: 12,
                        fontWeight: 500,
                        color: `#979797`
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#979797'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['第一产业','第二产业','第三产业']
                },
                {
                    type: 'category',
                    inverse: false,
                    gridIndex: 2,
                    position: 'left',
                    axisLabel: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#979797'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['第一产业','第二产业','第三产业']
                }
            ],
            series: [{
                    type: 'bar',
                    barWidth: 20,
                    name: '南京',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(216, 255, 168, 0.78)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(65, 255, 113, 0.78)"
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
                    data: [1.79, 31.51, 66.7]
                },
                {
                    type: 'bar',
                    barWidth: 20,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    name: '杭州',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(255, 173, 65, 0.78)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(255, 199, 117, 0.78)"
                                    }
                                ],
                                globalCoord: false
                            }
                        }
                    },
                    data: [1.7, 25.3, 73.0]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_10() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart10'));

        // 配置项
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '2%',
                right: '4%',
                bottom: '1%',
                top:'16%',
                containLabel: true
            },
            legend: {
                data: ['江苏省', '浙江省'],
                right: 10,
                top:12,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                // itemGap: 35
            },
            xAxis: {
                type: 'category',
                data: ['2024年之前','2024.01.01-2024.06.30','2024.07.01-2024.12.31'],
                axisLine: {
                lineStyle: {
                    color: 'white'
                }
                },
                axisLabel: {
                // interval: 0,
                rotate: 10,
                textStyle: {
                    fontFamily: 'Microsoft YaHei', 
                }
                },
            },
    
            yAxis: {
                type: 'value',
                axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
                },
                splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
                },
                axisLabel: {}
            },
            series: [{
                name: '江苏省',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 12,
                },
                },
                data: [2, 4, 14]
            },
            {
                name: '浙江省',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8bd46e'
                    }, {
                        offset: 1,
                        color: '#09bcb7'
                    }]),
                    barBorderRadius: 11,
                }
                
                },
                data: [4, 7, 15]
            }]
            };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function echarts_11() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart11'));

        // 配置项
        option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var value = params.value.toFixed(1);
                    var percent = params.percent;
                    var city = params.seriesName === '南京' ? '南京' : '杭州';
                    return `${city}研发投入<br/>${value}亿元（占比${percent}%）`;
                }
            },
            legend: {
                orient: 'vertical',
                right: 30,
                top: 'bottom',
                data: ['南京研发投入', '杭州研发投入'],
                textStyle: {
                    fontSize: 14,
                    color: '#fff'
                }
            },
            series: [{
                name: '研发经费对比',
                type: 'pie',
                radius: ['45%', '70%'],
                center: ['40%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 24,
                        fontWeight: 'bold',
                        formatter: '{b}\n{c}亿元',
                        color: '#fff'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 729,
                        name: '南京研发投入',
                        itemStyle: { color: '#3a7bd5' }  // 南京蓝色
                    },
                    {
                        value: 851,
                        name: '杭州研发投入',
                        itemStyle: { color: '#f46b45' }  // 杭州橙色
                    }
                ],
                // 添加环形中间文字
                markPoint: {
                    symbol: 'circle',
                    symbolSize: 120,
                    data: [{
                        name: '总研发投入',
                        value: '1580亿元',
                        x: '40%',
                        y: '50%',
                        itemStyle: { color: 'transparent' },
                        label: {
                            formatter: '总研发投入\n{text|1580亿元}',
                            rich: {
                                text: {
                                    fontSize: 16,
                                    color: '#fff',
                                    lineHeight: 24
                                }
                            }
                        }
                    }]
                }
            }],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})
