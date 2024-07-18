/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/bongda/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

    module.exports = jQuery;

    /***/ }),

    /***/ 17:
    /***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(18);


    /***/ }),

    /***/ 18:
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(jQuery) {jQuery( document ).ready( function( $ ) {
        function get_match_by_id( data, match_id ){
            if( ! data ) { return false; }

            var result = data.filter( function (match) { return match.id == match_id; } )

            if( result ) { return result[0]; }

            return false;
        }

        var getNowTime = function getNowTime() {
            var d = new Date();
            return new Date(d.getTime() + d.getTimezoneOffset() * 60000 + 7 * 60 * 60000);
        }

        const  MATCH_STATUS_TEXT = {
            0: 'Bất thường',
            1: 'Chưa bắt đầu',
            2: 'Hiệp 1',
            // 3: 'Nghĩ giữa hiệp',
            3: 'HT',
            4: 'Hiệp 2',
            5: 'Hiệp phụ',
            6: 'Hiệp phụ',
            7: 'Pen',
            8: 'Kết thúc',
            9: 'Trì hoãn',
            10: 'Gián đoạn',
            11: 'Cắt một nửa',
            12: 'Hủy bỏ',
            13: 'Chưa xác định',
        }

        const MATCH_STATUS_BASKETBALL_TEXT = {
            0: 'Bất thường',
            1: 'Chưa bắt đầu',
            2: 'Hiệp 1',
            3: 'Kết thúc Hiệp 1',
            4: 'Hiệp 2',
            5: 'Kết thúc Hiệp 2',
            6: 'Hiệp 3',
            7: 'Kết thúc Hiệp 3',
            8: 'Hiệp 4',
            9: 'Kết thúc Hiệp 4',
            10: 'Kết thúc',
            11: 'Gián đoạn',
            12: 'Hủy bỏ',
            13: 'Phần mở rộng',
            14: 'Cắt một nửa',
            15: 'Chưa xác định',
        }

        const getCurrentDateTimestamp = () => {
            const currentDateTimestamp = Math.floor(Date.now() / 1000);

            return currentDateTimestamp;
        };

        const timestampToMinutesSeconds = (timestamp) => {
            const minutes = Math.floor(timestamp / 60);
            const seconds = timestamp % 60;

            return { minutes, seconds };
        };

        const getTimeDetailLive = (
            statusId,
            startTimestamp = null,
            sportType = 'football'
          ) => {
            const stautsText =
              sportType === 'football'
                ? MATCH_STATUS_TEXT
                : MATCH_STATUS_BASKETBALL_TEXT;
            const statusTxt = stautsText[statusId] || '';

            if (sportType === 'basketball' || statusId === 7 || statusId == 8 || !startTimestamp) {
              return statusTxt;
            }

            const currentDate = getCurrentDateTimestamp();
            const { minutes } = timestampToMinutesSeconds(currentDate - startTimestamp);
            const minutesApp = minutes + 1;

            const statusTimeTexts = {
              2: minutesApp > 45 ? "45+'" : minutesApp + "'",
              4: minutesApp + 45 > 90 ? "90+'" : 45 + minutesApp + "'",
            //   5: minutesApp + 90 > 105 ? "105+'" : 90 + minutesApp + "'",
            //   6: minutesApp + 105 > 120 ? "120+'" : 105 + minutesApp + "'",
            };

            const timeText = statusTimeTexts[statusId]
              ? `: ${statusTimeTexts[statusId]}`
              : '';

            return `${statusTxt}${timeText}`;
        };

        const getMatchData = (match, sportType) => {
            const homeScores = sportType == 'basketball' ?  match.score[3] : match.score[2];
            const awayScores = sportType == 'basketball' ?  match.score[4] : match.score[3];
            let homeScore = homeScores[0];
            let awayScore = awayScores[0];
        
            if (sportType == 'basketball') {
                if (homeScores[4] > 0) {
                    homeScore = homeScores[4];
                }
                if (awayScores[4] > 0) {
                    awayScore = awayScores[4];
                }
            } else {
                if (homeScores[5] > 0) {
                    homeScore = homeScores[5];
                }
                if (awayScores[5] > 0) {
                    awayScore = awayScores[5];
                }
            }
        
            const homeHalfScore = homeScores[1];
            const homeCorner = homeScores[4];
            const awayYellowCards = awayScores[3];
            const homeYellowCards = homeScores[3];
            const awayHalfScore = awayScores[1];
            const awayCorner = awayScores[4];
            const statusCode = match.score[1];
            const halfStartTime = sportType == 'basketball' ? match.score[2] : match.score[4];
        
            return {
                homeScore,
                homeHalfScore,
                homeCorner,
                homeYellowCards,
                awayScore,
                awayHalfScore,
                awayCorner,
                awayYellowCards,
                statusCode,
                halfStartTime,
            };
        }
    
        const getTimeDetailLiveProcessStyle = (
            statusId,
            startTimestamp = null
          ) => {
          let style = {
            width: '20%',
            borderBottomRightRadius: 0,
          }

          if (!startTimestamp) {
            return style;
          }

          const currentDate = getCurrentDateTimestamp();
          const { minutes } = timestampToMinutesSeconds(currentDate - startTimestamp);
          const minutesApp = minutes + 1;

          // % thời gian đá
          const timeProcess = {
            2: minutesApp > 45 ? 50 : ((minutesApp / 120) * 100),
            4: minutesApp + 45 > 100 ? 90 : (((45 + minutesApp) / 120) * 100),
            5:
              minutesApp + 90 > 105
                ? (105 / 120) * 100
                : (((90 + minutesApp) / 120) * 100),
            6:
              minutesApp + 105 > 120 ? 100 : (((105 + minutesApp) / 120) * 100),
          };


          const timePlayerProcess = timeProcess[statusId] ? timeProcess[statusId] : 0;
          let width = 0;
          if (timePlayerProcess < 20) {
            width = 20;
          } else if (timePlayerProcess > 95) {
            width = 95;
          } else {
            width = timePlayerProcess;
          }

          let borderBottomRightRadius = 0;
          if (timePlayerProcess > 90) {
            borderBottomRightRadius = 45;
          } else if (timePlayerProcess > 80) {
            borderBottomRightRadius = 20;
          }

          return {
            ...style,
            width: `${width}%`,
            borderBottomRightRadius: `${borderBottomRightRadius}px`,
          };
        };

        var callback = function callback( data ) {
            const matchDetailLive = data.results;
            if($('.list-filter').length) {
                try {
                    var countLive = 0;
                    $.map( matchDetailLive, function( item, i ) {
                        const statusCode = item.score[1];
                        if(item.id
                            && footballIds.includes(item.id)
                            && [2, 3, 4, 5, 6, 7].includes(statusCode)) {
                            countLive++;
                        }

                        // Ẩn trận đã kết thúc
                        // if(statusCode == 8) {
                        //     $(`#match-child-${item.id}`).remove();
                        // }
                    });
    
                    var $activeTab = $('.list-filter').closest('.tab-pane.active');
                    if ($activeTab.length) {
                        $activeTab.find('.list-filter .now span').html(countLive);
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            $('.grid-matches .grid-matches__item').each(function () {
                var runtime = $(this).data('runtime'),
                    now = getNowTime().getTime() / 1000;
                try {
                    const matchId = $(this).attr('data-fid');
                    const sportId = $(this).attr('data-sport-id');
                    const sportType = sportId == 1 ? 'basketball' : 'football';
                    const match = get_match_by_id(matchDetailLive, matchId);

                    // if (jQuery('.list-filter li a.now').hasClass('active')) {
                    //     if (match === undefined) {
                    //         if ($(this).closest('.tab-pane.active').length) {
                    //             var sport = $(this).closest('.tab-pane.active').attr('id');
                    //             if (sport === 'football') {
                    //                 $(this).remove();
                    //             }
                    //         }
                    //     }
                    // }
                    $(this).removeAttr('style');

                    if( match ) {
                        const {
                            homeScore,
                            homeHalfScore,
                            homeCorner,
                            homeYellowCards,
                            awayScore,
                            awayHalfScore,
                            awayCorner,
                            awayYellowCards,
                            statusCode,
                            halfStartTime,
                        } = getMatchData(match, sportType);

                        $(this).attr('data-status', statusCode);
                        $(this).addClass('data-now');
                        $(this).find('.grid-match__time').show();
                        $(this).find('.grid-match__status--normal .t_time, .teambox__status')
                            .addClass('t_time_num')
                            .html( getTimeDetailLive(statusCode, halfStartTime, sportType) )
                            .show();
                        $(this).find('.grid-match__time .progress-bar').css(getTimeDetailLiveProcessStyle(statusCode, halfStartTime));
                        $(this).find('.match-status2').addClass('icon-live');
                        $(this).find('.halfCourt').html(`${homeHalfScore} - ${awayHalfScore}`);
                        $(this).find('.cornerGoal').html(`${homeCorner} - ${awayCorner}`);
                        $(this).find('.grid-match__vs, .teambox__day')
                            .addClass('t_vs_num')
                            .html(`<span class="home-score">${homeScore}</span> : <span class="away-score">${awayScore}</span>`)
                            .find(homeScore > awayScore ? '.home-score' : (homeScore < awayScore ? '.away-score' : ''))
                            .addClass('winner');
                    } else {
                        if (runtime - 7200 < now && runtime < now) {
                            $(this).find('.grid-match__time').show();
                            $(this).find('.grid-match__status--normal .t_time').addClass('t_time_num').show().html('Đang diễn ra');
                        } else if (runtime - 900 <= now && runtime > now) {
                            $(this).find('.grid-match__time').show();
                            $(this).find('.grid-match__status--normal .t_time').html('Sắp diễn ra').show().addClass('t_time_num');
                        } else {
                            $(this).find('.grid-match__time').hide();
                        }
                    }
              } catch (err) {
                    if (runtime - 7200 < now && runtime < now) {
                        $(this).find('.grid-match__status--normal .t_time').html('Đang diễn ra').show().addClass('t_time_num');
                    }
              }
            });

            if($('#match').length > 0) {
                var match_id = $('#match').attr('data-fid'),
                    sportId = $('#match').attr('data-sport-id'),
                    sportType = sportId == 1 ? 'basketball' : 'football',
                    match = get_match_by_id(matchDetailLive, match_id);
    
                if(match) {
                    const {
                        homeScore,
                        homeHalfScore,
                        homeCorner,
                        homeYellowCards,
                        awayScore,
                        awayHalfScore,
                        awayCorner,
                        awayYellowCards,
                        statusCode,
                        halfStartTime,
                    } = getMatchData(match, sportType);
                    $('#match').attr('data-status', statusCode);

                    // số lần sút trúng khung thành
                    const ShotsOffTarget = match.stats.find(item => item.type == 22);
                    if(ShotsOffTarget) {
                        const homeTarget = ShotsOffTarget.home;
                        const awayTarget = ShotsOffTarget.away;

                        $('#match .team-incident .incident-btn-target').removeClass('d-none');
                        $('#match .team-incident .target-home').html(homeTarget);
                        $('#match .team-incident .target-away').html(awayTarget);
                    } else {
                        $('#match .team-incident .incident-btn-target').addClass('d-none');
                    }

                    $('#match .team-incident .incident-btn-corner').removeClass('d-none');
                    $('#match .team-incident .corner-home').html(homeCorner);
                    $('#match .team-incident .corner-away').html(awayCorner);
                    $('#match .team-incident .incident-btn-yellow-card').removeClass('d-none');
                    $('#match .team-incident .yellow-card-home').html(homeYellowCards);
                    $('#match .team-incident .yellow-card-away').html(awayYellowCards);
                    $('#match .team-incident').removeClass('team-incident-none');
                    $('#match .team-incident .team-incident-content').removeClass('d-none');
                    $('#match .grid-match__time .t_time')
                        .html( getTimeDetailLive(statusCode, halfStartTime, sportType));
                    $('#match .grid-match__time').show();
                    $('#match .teambox__day')
                        .addClass('t_vs_num')
                        .html(`<span class="home-score">${homeScore}</span> : <span class="away-score">${awayScore}</span>`)
                        .find(homeScore > awayScore ? '.home-score' : (homeScore < awayScore ? '.away-score' : ''))
                        .addClass('winner');
                } else {
                    $('#match .team-incident').addClass('team-incident-none');
                }
            }
        };

        var fetchData = function fetchData() {
            let sportId = 0;
            if($('#match').length) {
                sportId = $('#match').attr('data-sport-id');
            } else if($('#basketball-tab').length && $('#basketball-tab').hasClass('active')) {
                sportId = 1;
            }
            let sportType = 'football';
            if(sportId == 1) {
              sportType = 'basketball';
            }
            var url = `${window.ajax_object.apiUrl3}/${sportType}/match/detail_live`;
            $.getJSON(url, callback).always(function () {
                window.document.dispatchEvent(new Event('DOMContentLoaded', {
                    bubbles: true,
                    cancelable: true,
                }));
            });
        };

        window.addEventListener( 'update-match', function () {
            fetchData();
        });

        fetchData();
        setInterval(fetchData, 25000);
        if ($('.btn-load-fixtures').length > 0) {
            $('.btn-load-fixtures').on('click', function() {
                var $this = $(this),
                    currentPage = $this.attr('data-page'),
                    postsPerPage = $this.attr('data-number'),
                    sportType = $this.closest('.tab-pane').attr('id'),
                    ajaxUrl = `/sport/${sportType}/load-more/home/page/${currentPage}/per/${postsPerPage}`;
        
                // AJAX request to load more fixtures
                jQuery.get(ajaxUrl, function(res) {
                    if (res.success) {
                        var selector = `.events_box #${sportType} ul.grid-matches`;
                        jQuery(selector).append(res.data.html);
                        var btnSelector = `#${sportType} .btn-load-fixtures`;
                        if (res.data.pagination.next_page === false) {
                            jQuery(btnSelector).remove();
                        } else {
                            jQuery(btnSelector).attr('data-page', res.data.pagination.next_page);
                            fetchData(); // Ensure fetchData is defined
                            setTimeout(getOddSport, 2000);
                        }
                    }
                });
        
                return false; // Prevent default click behavior
            });
        }

        $('.list-filter a').click(function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
        
            // Removing 'active' class from all links and adding to the clicked one
            $('.list-filter a').removeClass('active');
            $(this).addClass('active');
        
            var filter = $(this).data('filter');
            var sport = $(this).closest('.tab-pane.active').attr('id'); // Use closest for better performance
        
            // Building the URL based on sport and filter
            var ajaxUrl = `/sport/${sport}/filter/${filter}`;
        
            // AJAX request to fetch filtered data
            jQuery.get(ajaxUrl, function(res) {
                if (res.success) {
                    // Updating HTML based on the sport type
                    var selector = `.events_box #${sport} ul.grid-matches`;
                    var btnSelector = `#${sport} .btn-load-fixtures`;
                    jQuery(selector).html(res.data.html);
                    fetchData(); // Assuming fetchData is a function that needs to be called afterwards
                    setTimeout(getOddSport, 2000);
                    jQuery(btnSelector).remove();
                }
            });
        });        

        jQuery('.sl-leagues select').on('change', function () {
            $('.list-filter a').removeClass('active');
            localStorage.setItem('filter_league_id', $(this).val());
            var data = {
                'action': 'filter_match',
                'filter': 'league',
                'league': $(this).val(),
            };
            jQuery.get(window.ajax_object.ajaxurl, data, function (res) {
                if (res.success) {
                    $('.btn-load-fixtures').hide();
                    jQuery('.events_box ul.grid-matches').html(res.data.html);
                    window.document.dispatchEvent(new Event('DOMContentLoaded', {
                        bubbles: true,
                        cancelable: true,
                    }));
                }
            });
        });
        window.onload = function() {
            var hashValue = window.location.hash;
            if(hashValue == '#f-live') {
                    jQuery('.list-filter a.now').trigger('click');
                }else if(hashValue == '#f-hot') {
                    jQuery('.list-filter a.hot').trigger('click');
                }else if(hashValue == '#f-blv') {
                    jQuery('.list-filter a.commentator').trigger('click');
                }
        };
        window.addEventListener("hashchange", function() {
            var hashValue = window.location.hash;
            if(hashValue == '#f-live') {
                $('.list-filter a.now').trigger('click');
            }else if(hashValue == '#f-hot') {
                $('.list-filter a.hot').trigger('click');
            }else if(hashValue == '#f-blv') {
                $('.list-filter a.commentator').trigger('click');
            }
        });
    } )

    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

    /***/ })

    /******/ });
    //# sourceMappingURL=live.js.map
