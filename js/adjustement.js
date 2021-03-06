$(document).ready(function(){

    $('#bi').click(function(event) {
        event.preventDefault();
        $("#dialog_bi").dialog({
            title: "BI Training - 2 days",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $( "#tabs_1" ).tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#c_sharp').click(function(event) {
        event.preventDefault();
        $("#dialog_c_sharp").dialog({
            title: "C# - 1 week",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $("#tabs_2").tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#react').click(function(event) {
        event.preventDefault();
        $("#dialog_react").dialog({
            title: "React JS - 3 days",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $( "#tabs_3" ).tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#tuto').click(function(event) {
        event.preventDefault();
        $("#dialog_tuto").dialog({
            title: "Support teacher  - 58 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_4').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#c').click(function(event) {
        event.preventDefault();
        $("#dialog_c").dialog({
            title: "C - 15 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_5').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#representative').click(function(event) {
        event.preventDefault();
        $("#dialog_representative").dialog({
            title: "IT EPHEC branch representative at SIEP 2019 - 4 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_6').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#xamarin').click(function(event) {
        event.preventDefault();
        $("#dialog_xamarin").dialog({
            title: "Xamarin - 4 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_7').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#odoo-devday').click(function(event) {
        event.preventDefault();
        $("#dialog_odoo-devday").dialog({
            title: "Odoo Developper Day - 4 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_8').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#hackjam').click(function(event) {
        event.preventDefault();
        $("#dialog_hackjam").dialog({
            title: "HackJam ReactJS - 3 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_9').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#bewan').click(function(event) {
        event.preventDefault();
        $("#dialog_bewan").dialog({
            title: "BeWan - 3 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_10').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#it-job-day').click(function(event) {
        event.preventDefault();
        $("#dialog_it-job-day").dialog({
            title: "IT Job Day - 3 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_11').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#big-data').click(function(event) {
        event.preventDefault();
        $("#dialog_big-data").dialog({
            title: "Big Data Conference - 2.5 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_12').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#project-pres').click(function(event) {
        event.preventDefault();
        $("#dialog_project-pres").dialog({
            title: "Project Presentation - 1.5 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_13').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#cisco').click(function(event) {
        event.preventDefault();
        $("#dialog_cisco").dialog({
            title: "Cisco incubator - 2 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: false,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_14').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#odoo-cloud').click(function(event) {
        event.preventDefault();
        $("#dialog_odoo-cloud").dialog({
            title: "Odoo cloud hosting - 1.5 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_15').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });
    $('#speed-dating').click(function(event) {
        event.preventDefault();
        $("#dialog_speed-dating").dialog({
            title: "Speed dating - 1.5 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_16').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });
    $('#projet-integration').click(function(event) {
        event.preventDefault();
        $("#dialog_projet-integration").dialog({
            title: "Company building",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_17').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });
    $('#international-week').click(function(event) {
        event.preventDefault();
        $("#dialog_international-week").dialog({
            title: "International Week",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_18').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });

    $('#editx').click(function(event) {
        event.preventDefault();
        $("#dialog_editx").dialog({
            title: "EDITx Challenge - 1.5 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_19').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });
    $('#win-serv').click(function(event) {
        event.preventDefault();
        $("#dialog_win-serv").dialog({
            title: "Windows Server - 16 hours",
            modal: true,
            width: 800,
            height: 600,
            resizable: false,
            draggable: true,
            buttons: [
                {
                    text: "Close",
                    click: function() {
                        $( this ).dialog( "close" );
                    }
                }
            ],
            show: {
                effect: 'fade',
                speed: 1500
            },
            hide: {
                effect: 'fade',
                speed: 500
            },
        });
        $('#tabs_20').tabs({
            active: 0,
            heightStyle: "fill"
        });
    });
});