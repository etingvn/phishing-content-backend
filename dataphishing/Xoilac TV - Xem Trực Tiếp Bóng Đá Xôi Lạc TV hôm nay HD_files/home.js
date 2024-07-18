const getImageUrl = (type, id) => {
    return `https://img.vbfast.xyz/football/${type}/${id}/image`;
};

// START:Tab
jQuery(document).ready(function () {
    var btnLivescoreActive = false;
    jQuery("button[data-toggle='tab']").on('show.bs.tab', function (e) {
        // var targetPane = jQuery(e.target).attr('data-target');
        // var $iframe = jQuery(targetPane).find('iframe');
        // if (!$iframe.attr('src')) {
        //     $iframe.attr('src', $iframe.data('src'));
        // }

        jQuery('.btn-livescore .lv-svg').show();
        jQuery('.btn-livescore .lv-svg-active').hide();
        btnLivescoreActive = false;
    });

    jQuery('.btn-livescore input').on('change', function (e) {
        if (btnLivescoreActive) {
            jQuery('.btn-livescore .lv-svg').show();
            jQuery('.btn-livescore .lv-svg-active').hide();

            jQuery('#football').tab('show');
            jQuery('#basketball').removeClass('fade show active');
            jQuery('#livescore').removeClass('fade show active');

            jQuery('#football-tab').addClass('active');

            btnLivescoreActive = false;
        } else {
            jQuery('.btn-livescore .lv-svg').hide();
            jQuery('.btn-livescore .lv-svg-active').show();

            jQuery('#football').removeClass('fade show active');
            jQuery('#basketball').removeClass('fade show active');
            jQuery('#livescore').tab('show');

            jQuery('.sports-bars .nav-link').removeClass('active');

            var $iframe = jQuery('#livescore_iframe');
            if (!$iframe.attr('src')) {
                $iframe.attr('src', $iframe.data('src'));
            }

            btnLivescoreActive = true;
        }
    });
});
// END: tab

// START: carousel
jQuery(document).ready(function () {
    jQuery('.carousel-league').removeClass('d-none');

    jQuery('.slick-carousel-league').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });

    jQuery('.prev-btn').click(function () {
        jQuery('.slick-carousel-league').slick('slickPrev');
    });

    jQuery('.next-btn').click(function () {
        jQuery('.slick-carousel-league').slick('slickNext');
    });

    jQuery('.prev-btn').addClass('slick-disabled');

    jQuery('.slick-carousel-league').on('afterChange', function () {
        if (jQuery('.slick-prev').hasClass('slick-disabled')) {
            jQuery('.prev-btn').addClass('slick-disabled');
        } else {
            jQuery('.prev-btn').removeClass('slick-disabled');
        }
        if (jQuery('.slick-next').hasClass('slick-disabled')) {
            jQuery('.next-btn').addClass('slick-disabled');
        } else {
            jQuery('.next-btn').removeClass('slick-disabled');
        }
    });
});
// END: carousel

// START: Hover
jQuery(document).ready(function () {
    // Start: statistics
    const techKind = {
        ball_possession: 'TL kiểm soát bóng',
        corner_kicks: 'Phạt góc',
        goals: 'Bàn thắng',
        penalty: 'Phạt đền',
        assists: 'Kiến tạo',
        red_cards: 'Thẻ đỏ',
        yellow_cards: 'Thẻ vàng',
        shots: 'Sút bóng',
        shots_on_target: 'Sút cầu môn',
        passes: 'Chuyền bóng',
        passes_accuracy: 'Chuyền bóng thành công',
        dribble: 'Rê bóng',
        dribble_succ: 'Rê bóng thành công',
        clearances: 'Đánh chặn',
        blocked_shots: 'Cản bóng',
        shots_off_target: 'Sút ngoài cầu môn',
        attacks: 'Tấn công',
        dangerous_attack: 'Tấn công nguy hiểm',
        interceptions: 'Cắt bóng',
        tackles: 'Tắc bóng',
        key_passes: 'Chuyền bóng quan trọng',
        crosses: 'Tạt bóng',
        crosses_accuracy: 'Tạt bóng thành công',
        long_balls: 'Chuyền dài',
        long_balls_accuracy: 'Chuyền dài chính xác',
        duels: 'Đối đầu',
        duels_won: 'Đối đầu thành công',
        fouls: 'Phạm lỗi',
        was_fouled: 'Bị phạm lỗi',
        goals_against: 'Bàn thua',
        offsides: 'Việt vị',
        yellow2red_cards: 'Thẻ vàng biến thành thẻ đỏ',
        freekicks: 'Đá phạt trực tiếp',
        freekick_goals: 'Bàn từ đá phạt',
        hit_woodwork: 'Sút trúng cột dọc',
        fastbreaks: 'Phản công nhanh',
        fastbreak_shots: 'Sút trong phản công nhanh',
        fastbreak_goals: 'Bàn từ phản công nhanh',
        poss_losts: 'Mất bóng',
    };

    function buildTags(htmlTemple, data) {
        return htmlTemple.replace(/\{\$(\w+)\}/g, function (a, b) {
          return b in data ? data[b] : '';
        });
    }

    function getTabLabel (type) {
        switch (type) {
            case 0:
                return 'Tất cả';
            case 1:
                return 'Hiệp 1';
            case 2:
                return 'Hiệp 2';
            case 3:
                return 'Hiệp Phụ';
            default:
                return 'Unknown';
        }
    }

    function calculatePercentage(value, total) {
        if (total === 0) return '0%';
        return `${((value / total) * 100).toFixed(2)}%`;
    }

    function getProcessedStats (statistics, statisticAll, homeTeamId, awayTeamId) {
        const homeStat = statistics.stats.find(
          (stat) => stat.team_id === homeTeamId
        );
        const awayStat = statistics.stats.find(
          (stat) => stat.team_id === awayTeamId
        );

        // const homeStatAll = statisticAll.stats.find(
        //   (stat) => stat.team_id === homeTeamId
        // );
        // const awayStatAll = statisticAll.stats.find(
        //   (stat) => stat.team_id === awayTeamId
        // );

        if (!homeStat || !awayStat) return [];

        return Object.keys(techKind).map((key) => ({
            key,
            type: techKind[key],
            home: key === 'ball_possession' ? `${homeStat[key]}%` : homeStat[key],
            away: key === 'ball_possession' ? `${awayStat[key]}%` : awayStat[key],
            showHomePre: calculatePercentage(
              Number(homeStat[key]),
              Number(homeStat[key]) + Number(awayStat[key])
            ),
            showAwayPre: calculatePercentage(
              Number(awayStat[key]),
              Number(homeStat[key]) + Number(awayStat[key])
            ),
            winHome:
              Number(homeStat[key]) > Number(awayStat[key])
                ? 'xlz-stats__home-win'
                : '',
            winAway:
              Number(awayStat[key]) > Number(homeStat[key])
                ? 'xlz-stats__away-win'
                : '',
        }))
        .filter((stat) => {
            if (
              stat.key === 'ball_possession' &&
              homeStat[stat.key] !== undefined &&
              awayStat[stat.key] !== undefined
            ) {
              return true;
            }

            if(homeStat[stat.key] === 0 && awayStat[stat.key] === 0) {
                return false;
            }

            // if (
            //   !homeStatAll ||
            //   !awayStatAll ||
            //   (homeStatAll[stat.key] === 0 && awayStatAll[stat.key] === 0)
            // ) {
            //   return false;
            // }

            return !isNaN(Number(stat.home)) && !isNaN(Number(stat.away));
        });
    }
    // End: statistics

    // Start: incidents
    const iconMapIncidents = {
        1: {
            icon: "#icon-goal",
            width: "25px",
            height: "25px",
        },
        3: {
            icon: "#icon-yellow-card",
            width: "11px",
            height: "13px",
        },
        4: {
            icon: "#icon-red-card",
            width: "11px",
            height: "13px",
        },
        8: {
            icon: "#icon-Penalty",
            width: "20px",
            height: "20px",
        },
        9: {
            icon: "#icon-substitution",
            width: "14px",
            height: "18px",
        },
        15: {
            icon: "#icon-twoyellow-red",
            width: "20px",
            height: "20px",
        },
        16: {
            icon: "#icon-PenaltySaved",
            width: "20px",
            height: "20px",
        },
        17: {
            icon: "#icon-soccer",
            width: "20px",
            height: "20px",
        },
        21: {
            icon: "#icon-shots-on-target",
            width: "19px",
            height: "14px",
        },
        28: {
            icon: "#icon-var",
            width: "20px",
            height: "13px",
        },
        29: {
            icon: "#icon-Penalty",
            width: "20px",
            height: "20px",
        },
        30: {
            icon: "#icon-PenaltySaved",
            width: "20px",
            height: "20px",
        },
    };

    const getEventClass = (incident) => {
        if (incident.position === 1) {
            return 'xlz-summary-block__event--home';
        } else if(incident.position === 2) {
            return 'xlz-summary-block__event--away';
        }

        return '';
    };

    const formatTitle = (type) => {
        const titles = {
          11: "HT",
          12: "FT",
          26: "ET",
          27: "PEN",
        };

        return titles[type] || "Unknown";
    };

    function getDisplayTime(incident) {
        let displayTime = incident.time;
        let injuryStartTime = null;
        let extraTime = false;
        switch (incident.type) {
            case 19: // Injury time start
                injuryStartTime = incident.time;
                break;
            case 11: // First half end
            case 12: // Second half end
                injuryStartTime = null;
                extraTime = incident.time >= 105;
                break;
        }
        if ([12, 26, 11].includes(incident.type)) {
          displayTime = "";
        } else if (injuryStartTime !== null && !extraTime) {
            // Calculate added time if in injury time
            let addedTime = Math.abs(incident.time - (injuryStartTime ?? 0));
            displayTime =
                addedTime === 0
                ? injuryStartTime
                : `${Math.min(injuryStartTime ?? 0, incident.time)}+${addedTime}`;
        }

        return displayTime;
    }

    const getPlayerName = (incident) => {
        let str = null;
        if (incident.player) {
          str = incident.player.short_name || incident.player.name;
        }
        if (incident.playerIn) {
          str = incident.playerIn.short_name || incident.playerIn.name;
        }
        if (incident.playerOut) {
          str = incident.playerOut.short_name || incident.playerOut.name;
        }

        return str ? str : '';
    };

    const getPlayerName1 = (incident, type) => {
        switch (type) {
            case "in":
              return incident.playerIn ? incident.playerIn.short_name || incident.playerIn.name : "";
            case "out":
              return incident.playerOut ? incident.playerOut.short_name || incident.playerOut.name : "";
            default:
              return incident.player ? incident.player.short_name || incident.player.name : "";
          }
    };

    const getPlayerImageUrl = (incident, type) => {
        switch (type) {
          case "in":
            return incident.playerIn ? getImageUrl('player', incident.playerIn.id) : "";
          case "out":
            return incident.playerOut
              ? getImageUrl('player', incident.playerOut.id)
              : "";
          default:
            return incident.player ? getImageUrl('player', incident.player.id) : "";
        }
    };


    function getProcessedIncidents(incidents) {
        let tempHomeScore = 0;
        let tempAwayScore = 0;

        return incidents
            .filter((incident) => incident.type !== 19) // Ensuring `incident` is treated as IIncident
            .map((incident) => {
                if (![11, 12, 26, 27].includes(incident.type)) {
                    tempHomeScore = incident.home_score || tempHomeScore;
                    tempAwayScore = incident.away_score || tempAwayScore;
                } else {
                    incident.home_score = tempHomeScore;
                    incident.away_score = tempAwayScore;
                }
                return {
                    ...incident,
                    displayTime: getDisplayTime(incident),
                };
            })
            .reverse();
    };

    const shouldShowScore = (incident) => incident.type && [1, 8, 7, 29, 17, 16, 30].includes(incident.type);

    // End: incidents
    var matchIdHover = null;
    var activeHoverPopup = false;
    var hoverType = null;
    var scrollTop = 0

    function getStatistics() {
        if(!matchIdHover || hoverType != 'statistics') {
            return;
        }

        const homeTeamId = jQuery(`#match-child-${matchIdHover}`).attr('data-home-team-id');
        const awayTeamId = jQuery(`#match-child-${matchIdHover}`).attr('data-away-team-id');
        const url = `${window.ajax_object.apiUrl}/match/${matchIdHover}/statistics`;
        jQuery.getJSON(url, (rs) => {
            const statistics = rs.data;
            const statisticAll = statistics.find((item) => item.type === 0);
            let check = false;
            if (statisticAll) {
                for (const stats of statisticAll.stats) {
                    if(check) {
                        break;
                    }
                    for (const [key, value] of Object.entries(stats)) {
                        if(key !== 'team_id' && value != 0) {
                            check = true;
                            break;
                        }
                    }
                }
            }
            if(check) {
                let tabHtml = '';
                let contentHtml = [];
                const statisticsTemplate = jQuery('#statisticsTemplate').html();
                const statisticsContentTemplate = jQuery('#statisticsContentTemplate').html();
                const statisticsItemTemplate = jQuery('#statisticsItemTemplate').html();
                for (const statis of statistics) {
                    tabHtml += `
                        <li class='xlz-nav-item nav-item'>
                            <a class='nav-link ${statis.type === 0 ? 'active' : '' }' data-target="#statistics-${matchIdHover}-${statis.type}" data-toggle="tab">
                                ${ getTabLabel(statis.type) }
                            </a>
                        </li>
                    `;
                    const processedStats = getProcessedStats(statis, statisticAll, homeTeamId, awayTeamId);
                    let lineHtml = [];
                    for (const line of processedStats) {
                        lineHtml.push(buildTags(statisticsItemTemplate, line));
                    }
                    contentHtml.push(buildTags(statisticsContentTemplate, {
                        id: `statistics-${matchIdHover}-${statis.type}`,
                        class: statis.type === 0 ? 'fade show active' : '',
                        listItem: lineHtml.join(''),
                    }));
                }
                const elementId = `#match-popup-${matchIdHover}`;
                jQuery(`${elementId} .statics-popup`).html(buildTags(statisticsTemplate, {
                    tabList: tabHtml,
                    tabContent: contentHtml.join(''),
                }));

                // scroll lại vị trí cũ sau khi thay html
                jQuery(`${elementId} .xlz-home-scrollable-content`).scroll(function (event) {
                    scrollTop = jQuery(this).scrollTop();
                });
                jQuery(`${elementId} .xlz-home-scrollable-content`).scrollTop(scrollTop);

                jQuery(`${elementId} .statics-popup`).removeClass('d-none');
                jQuery(`${elementId} .incident-popup`).addClass('d-none');
                jQuery(`${elementId}`).addClass('statistic-section');
                // ẩn toàn bộ popup trừ item đang hover
                jQuery('.match-popup').each(function() {
                    const itemId = jQuery(this).attr('id');
                    if( `#${itemId}` != elementId) {
                        jQuery(this).addClass('d-none');
                    }
                })
                jQuery(`${elementId}`).removeClass('d-none');
            }

            setTimeout(() => {
                getStatistics()
            }, 20000);
        })
    }

    jQuery(document).on('mouseenter', '.icon-haflt', function() {
        matchIdHover = jQuery(this).attr('data-fid');
        const status = jQuery(`#match-child-${matchIdHover}`).attr('data-status');
        if(status == 1) {
            return;
        }
        hoverType = 'statistics';

        getStatistics();
    });

    jQuery(document).on('mouseleave', '.icon-haflt', function() {
        matchIdHover = jQuery(this).attr('data-fid');
        setTimeout(() => {
            if (!activeHoverPopup) {
                jQuery(`#match-popup-${matchIdHover}`).addClass('d-none');
                matchIdHover = null;
                scrollTop = 0;
            }
        }, 50);
    });

    function getIncidents() {
        if(!matchIdHover || hoverType != 'incidents') {
            return;
        }

        const url = `${window.ajax_object.apiUrl}/match/${matchIdHover}/incidents`;
        jQuery.getJSON(url, (rs) => {
            const incidents = rs.data;
            const incidentsTemplate = jQuery('#incidentsTemplate').html();
            const incidentsItemTemplate = jQuery('#incidentsItemTemplate').html();

            const processedIncidents = getProcessedIncidents(incidents);
            if(processedIncidents.length === 0) {
                return
            }
            const listHtml = [];
            for (const incident of processedIncidents) {
                const playerImage =getPlayerImageUrl(incident);
                const playerName = getPlayerName1(incident);
                const playerImageIn = getPlayerImageUrl(incident, 'in');
                const playerNameIn = getPlayerName1(incident, 'in');
                const playerImageOut = getPlayerImageUrl(incident, 'out');
                const playerNameOut = getPlayerName1(incident, 'out');

                const data = {
                    displayTime: incident.displayTime ? incident.displayTime + "'" : "",
                    eventClass: getEventClass(incident),
                    scoreShowBtn: shouldShowScore(incident) ? '' : 'd-none',
                    homeScore: incident.home_score || 0,
                    awayScore: incident.away_score || 0,
                    scoreShow: incident.type && [11, 12, 26, 27].includes(incident.type) ? 'd-flex' : 'd-none',
                    scorClass: incident.home_score < incident.away_score ? 'xlz-summary-block__midfield-away' : '',
                    title: formatTitle(incident.type),
                    type: incident.type,
                    icon: iconMapIncidents[incident.type]?.icon,
                    iconClass: incident.type && ![11, 12, 26, 27].includes(incident.type) ? '' : 'd-none',
                    iconWidth: iconMapIncidents[incident.type]?.width,
                    iconHeight: iconMapIncidents[incident.type]?.height,
                    playerClass: incident.type && [1, 8, 7, 29, 28, 17, 16, 3, 4].includes(incident.type) ? '' : 'd-none',
                    playerImage,
                    playerName,
                    playerClassIn: incident.type !== 9 || !incident.playerIn ? 'd-none' : '',
                    playerImageIn,
                    playerNameIn,
                    playerClassOut: incident.type !== 9 || !incident.playerOut ? 'd-none' : '',
                    playerImageOut,
                    playerNameOut,
                    playerName1: playerNameIn ? playerNameIn : getPlayerName(incident),
                    playerClassOut1: !incident.playerOut ? 'd-none' : '',
                }

                listHtml.push(buildTags(incidentsItemTemplate, data));
            }
            const elementId = `#match-popup-${matchIdHover}`;
            jQuery(`${elementId} .incident-popup`).html(buildTags(incidentsTemplate, {
                incidentsList: listHtml.join(''),
                classIconStart: processedIncidents.length === 0 ? 'd-none' : ''
            }));
            
            // scroll lại vị trí cũ sau khi thay html
            jQuery(`${elementId} .xlz-home-scrollable-content`).scroll(function (event) {
                scrollTop = jQuery(this).scrollTop();
            });
            jQuery(`${elementId} .xlz-home-scrollable-content`).scrollTop(scrollTop);

            jQuery(`${elementId} .statics-popup`).addClass('d-none');
            jQuery(`${elementId} .incident-popup`).removeClass('d-none');
            jQuery(`${elementId}`).removeClass('statistic-section');
            // ẩn toàn bộ popup trừ item đang hover
            jQuery('.match-popup').each(function() {
                const itemId = jQuery(this).attr('id');
                if( `#${itemId}` != elementId) {
                    jQuery(this).addClass('d-none');
                }
            })
            jQuery(`${elementId}`).removeClass('d-none');

            setTimeout(() => {
                getIncidents()
            }, 20000);
        })
    }

    jQuery(document).on('mouseenter', '.grid-match__status', function() {
        matchIdHover = jQuery(this).attr('data-fid');
        const status = jQuery(`#match-child-${matchIdHover}`).attr('data-status');
        if(status == 1) {
            return;
        }
        hoverType = 'incidents';
        getIncidents();
    });
    
    jQuery(document).on('mouseleave', '.grid-match__status', function() {
        matchIdHover = jQuery(this).attr('data-fid');
        setTimeout(() => {
            if (!activeHoverPopup) {
                jQuery(`#match-popup-${matchIdHover}`).addClass('d-none');
                matchIdHover = null;
                scrollTop = 0;
            }
        }, 50);
    });

    jQuery(document).on('mouseenter', '.match-popup', function() {
        activeHoverPopup = true;
    });

    jQuery(document).on('mouseleave', '.match-popup', function() {
        activeHoverPopup = false;
        jQuery(`#match-popup-${matchIdHover}`).addClass('d-none');
        matchIdHover = null;
        scrollTop = 0;
    });
});
// END: Hover

jQuery(document).on('click', '.grid-matches__item .grid-match__status, .grid-matches__item .icon-haflt', function() {
    const matchId = jQuery(this).attr('data-fid');
    const href = jQuery(`#match-child-${matchId} .redirectPopup`).attr('href');
    window.location.href = href;
})
