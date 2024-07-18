function getContrastColor(hexcolor) {
    // Remove the hash if it's there
    hexcolor = hexcolor.replace("#", "");

    // Parse r, g, b values
    let r = parseInt(hexcolor.substring(0, 2), 16); // hex to integer
    let g = parseInt(hexcolor.substring(2, 4), 16);
    let b = parseInt(hexcolor.substring(4, 6), 16);

    // Determine the brightness of the background
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // If brightness is under 128, return white, otherwise return black
    return brightness < 128 ? "white" : "black";
}
function buildTags(htmlTemple, data) {
    return htmlTemple.replace(/\{\$(\w+)\}/g, function (a, b) {
      return b in data ? data[b] : "";
    });
}
function formatDate(format, timestamp) {
    var date = new Date(timestamp * 1000);
    var replacements = {
      DD: ("0" + date.getDate()).slice(-2),
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      YYYY: date.getFullYear().toString(),
      HH: ("0" + date.getHours()).slice(-2),
      mm: ("0" + date.getMinutes()).slice(-2),
    };
    for (var key in replacements) {
      format = format.replace(key, replacements[key]);
    }
    return format;
  }
// function xbdGetStanding(seasonId, filter = "all") {
//     var self = this;
//     const determineMatchResult = (match, teamId) => {
//       if (match.home_team.id === teamId) {
//         if (match.home_scores[0] > match.away_scores[0]) return "w";
//         if (match.home_scores[0] < match.away_scores[0]) return "l";
//       } else if (match.away_team.id === teamId) {
//         if (match.home_scores[0] < match.away_scores[0]) return "w";
//         if (match.home_scores[0] > match.away_scores[0]) return "l";
//       }
//       return "d";
//     };
//     jQuery.getJSON(`${ajax_object.apiUrl}/standing/${seasonId}`)
//       .done(function (response) {
//         if (!response) return;
//         try {
//           const data = response.data;
//           if(data.standings.tables.length === 0) jQuery('a[id="tab-bxh"]').parent().hide();
//           let standingHTML = "";
//           let stagePhasesHTML = "";
//           let standingFilter = "";
//           const groupName = ["A", "B", "C", "D", "E", "F", "G", "H"];
//           // Populate rows and standings
//           data.standings.tables.forEach((item) => {
//             let rowsHTML = "";
//             const rowsTemplate = jQuery("#standing-row-template").html();
//             item.rows.sort((a, b) => {
//               if (filter === "all") {
//                 return a.position - b.position;
//               } else {
//                 return a[`${filter}_position`] - b[`${filter}_position`];
//               }
//             });
//             item.rows.forEach((standing) => {
//               let filterFields;
//               let formHTML = "";
//               let highlightClass = "";
//               let isWinning = false;
//               let isLosing = false;
//               let isDraw = false;

//               const homeScore = standing?.live_score?.home_scores[0];
//               const awayScore = standing?.live_score?.away_scores[0];
//               if (standing?.live_score?.home_team_id === standing.team_id) {
//                 if (homeScore > awayScore) isWinning = true;
//                 else if (homeScore < awayScore) isLosing = true;
//                 else isDraw = true;
//               } else if (
//                 standing?.live_score?.away_team_id === standing.team_id
//               ) {
//                 if (awayScore > homeScore) isWinning = true;
//                 else if (awayScore < homeScore) isLosing = true;
//                 else isDraw = true;
//               }

//               const team = data.teams.find(
//                 (team) => team.id === standing.team_id
//               );
//               const promotion = data.standings.promotions.find(
//                 (promotion) => promotion.id == standing.promotion_id
//               );
//               // console.log(team)
//               // console.log(standing.team_id)
//               const baseFields = {
//                 short_name: team.name,
//                 team_id: standing.team_id,
//               };
//               if (filter === "all") {
//                 filterFields = {
//                   position_style: promotion?.color
//                     ? `background-color: ${
//                         promotion?.color ?? ""
//                       };color: ${getContrastColor(promotion.color)}`
//                     : "",
//                   highlight: highlightClass,
//                   position: standing.position,
//                   total: standing.total,
//                   won: standing.won,
//                   draw: standing.draw,
//                   loss: standing.loss,
//                   goal_diff: standing.goal_diff,
//                   points: standing.points,
//                   goals: standing.goals,
//                   goals_against: standing.goals_against,
//                   team_logo: `${ajax_object.apiUrl2}/team/${standing.team_id}/image`,
//                   scores: standing.live_score
//                     ? standing.live_score?.home_scores[0] +
//                       "-" +
//                       standing.live_score?.away_scores[0]
//                     : "",
//                 };
//                 if (
//                   standing.recent_matches &&
//                   standing.recent_matches.length > 0
//                 ) {
//                   standing.recent_matches.forEach((result) => {
//                     const title = `${result.home_scores[0]}:${
//                       result.away_scores[0]
//                     }&nbsp; (${result.home_team.name} - ${
//                       result.away_team.name
//                     }) ${formatDate("DD/MM/YYYY", result.match_time)}`;
//                     formHTML += `<div class="formIcon formIcon--${determineMatchResult(
//                       result,
//                       standing.team_id
//                     )}" title="${title}">${determineMatchResult(
//                       result,
//                       standing.team_id
//                     )}</div>`;
//                   });
//                 }
//               } else {
//                 // home or away
//                 filterFields = {
//                   position_style: "",
//                   highlight: highlightClass,
//                   position: standing[`${filter}_position`],
//                   total: standing[`${filter}_total`],
//                   won: standing[`${filter}_won`],
//                   draw: standing[`${filter}_draw`],
//                   loss: standing[`${filter}_loss`],
//                   goal_diff: standing[`${filter}_goal_diff`],
//                   points: standing[`${filter}_points`],
//                   goals: standing[`${filter}_goals`],
//                   goals_against: standing[`${filter}_goals_against`],
//                   team_logo: `${ajax_object.apiUrl2}/team/${standing.team_id}/image`,
//                   scores: standing.live_score
//                     ? standing.live_score?.home_scores[0] +
//                       "-" +
//                       standing.live_score?.away_scores[0]
//                     : "",
//                 };
//                 if (
//                   standing[`${filter}_matches`] &&
//                   standing[`${filter}_matches`].length > 0
//                 ) {
//                   standing[`${filter}_matches`].forEach((result) => {
//                     const title = `${result.home_scores[0]}:${
//                       result.away_scores[0]
//                     }&nbsp; (${result.home_team.name} - ${
//                       result.away_team.name
//                     }) ${formatDate("DD/MM/YYYY", result.match_time)}`;
//                     formHTML += `<div class="formIcon formIcon--${determineMatchResult(
//                       result,
//                       standing.team_id
//                     )}" title="${title}">${determineMatchResult(
//                       result,
//                       standing.team_id
//                     )}</div>`;
//                   });
//                 }
//               }
//               const populatedRow = buildTags(rowsTemplate, {
//                 ...baseFields,
//                 ...filterFields,
//                 form: formHTML,
//               });
//               rowsHTML += populatedRow;
//             });
//             standingHTML += jQuery("#standing-template")
//               .html()
//               .replace(
//                 "{$league_name}",
//                 data.competition.type == 1 && item.group == 0
//                   ? "Team"
//                   : "Group " + groupName[item.group - 1]
//               )
//               .replace("{$rows}", rowsHTML);
//           });
//           data.standings.promotions.forEach((stagePhase) => {
//             stagePhasesHTML += jQuery("#standing-stage-phase-template")
//               .html()
//               .replace("{$color}", stagePhase.color)
//               .replace("{$name}", stagePhase.name);
//           });
//           standingFilter = jQuery("#standing-filter").html();
//           jQuery(".standings").html(standingHTML).append(stagePhasesHTML);
//         } catch (error) {
//           console.log(error);
//           jQuery('a[href="#tab-bxh"]').hide();
//         }
//         // if (self.match.status_id !== 8) {
//         //   setTimeout(function () {
//         //     self.xbdGetStanding(self.season_id);
//         //   }, 60000);
//         // }
//       })
//       .fail(function (jqXHR, textStatus, errorThrown) {
//         console.log(jqXHR.status);
//         if (jqXHR.status == 404) {
//           // Xá»­ lÃ½ khi tráº¡ng thÃ¡i lÃ  404 (khÃ´ng tÃ¬m tháº¥y)
//           console.log("File khÃ´ng tÃ¬m tháº¥y");
//         } else {
//           // Xá»­ lÃ½ lá»—i khÃ¡c
//           jQuery('#tab-bxh').parent().hide();
//           console.log("Lá»—i: " + textStatus);
//         }
//       });
// };
function xbdGetStanding(seasonId, filter = "all") {
  var self = this;
  const determineMatchResult = (match, teamId) => {
    if (match.home_team.id === teamId) {
      if (match.home_scores[0] > match.away_scores[0]) return "w";
      if (match.home_scores[0] < match.away_scores[0]) return "l";
    } else if (match.away_team.id === teamId) {
      if (match.home_scores[0] < match.away_scores[0]) return "w";
      if (match.home_scores[0] > match.away_scores[0]) return "l";
    }
    return "d";
  };
  jQuery.getJSON(`${ajax_object.apiUrl}/standing/${seasonId}`)
    .done(function (response) {
      if (!response) return;
      try {
        const data = response.data;
        if (data.standings.tables.length === 0)
          jQuery('a[id="tab-bxh"]').parent().hide();
        let standingHTML = "";
        let stagePhasesHTML = "";
        let standingFilter = "";
        const groupName = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        // Populate rows and standings
        data.standings.tables
          // .filter((item) => item.stage_id === self.match.round.stage_id)
          .forEach((item) => {
            let rowsHTML = "";
            const rowsTemplate = jQuery("#standing-row-template").html();
            item.rows.sort((a, b) => {
              if (filter === "all") {
                return a.position - b.position;
              } else {
                return a[`${filter}_position`] - b[`${filter}_position`];
              }
            });
              item.rows.forEach((standing) => {
                let filterFields;
                let formHTML = "";
                let highlightClass = "";
                let isWinning = false;
                let isLosing = false;
                let isDraw = false;
                let scores = "";
                const homeScore = standing?.live_score?.home_scores[0];
                const awayScore = standing?.live_score?.away_scores[0];
                if (standing?.live_score?.home_team_id === standing.team_id) {
                  scores = standing.live_score?.home_scores[0] + "-" + standing.live_score?.away_scores[0];
                  if (homeScore > awayScore) isWinning = true;
                  else if (homeScore < awayScore) isLosing = true; 
                  else isDraw = true;
                } else if (
                  standing?.live_score?.away_team_id === standing.team_id
                ) {
                  scores = standing.live_score?.home_scores[0] + "-" + standing.live_score?.away_scores[0];
                  if (awayScore > homeScore) {
                    isWinning = true;
                    scores = standing.live_score?.away_scores[0] + "-" + standing.live_score?.home_scores[0];
                  }
                  else if (awayScore < homeScore) {
                    isLosing = true;
                    scores = standing.live_score?.away_scores[0] + "-" + standing.live_score?.home_scores[0];
                  }
                  else isDraw = true;
                }
                // if (self.match.home_team_id === standing.team_id) {
                //   highlightClass = "highlight-home";
                // } else if (self.match.away_team_id === standing.team_id) {
                //   highlightClass = "highlight-away";
                // }
  
                if (isWinning)
                  highlightClass += " liveScore liveScore--isWinning";
                else if (isLosing)
                  highlightClass += " liveScore liveScore--isLosing";
                else if (isDraw)
                  highlightClass += " liveScore liveScore--isDraw";
                const team = data.teams.find(
                  (team) => team.id === standing.team_id
                );
                const promotion = data.standings.promotions.find(
                  (promotion) => promotion.id == standing.promotion_id
                );
                // console.log(team)
                // console.log(standing.team_id)
                const baseFields = {
                  short_name: team.name,
                  team_id: standing.team_id,
                };
                if (filter === "all") {
                  filterFields = {
                    position_style: promotion?.color
                      ? `background-color: ${
                          promotion?.color ?? ""
                        };color: ${self.getContrastColor(promotion.color)}`
                      : "",
                    highlight: highlightClass,
                    position: standing.position,
                    total: standing.total,
                    won: standing.won,
                    draw: standing.draw,
                    loss: standing.loss,
                    goal_diff: standing.goal_diff,
                    points: standing.points,
                    goals: standing.goals,
                    goals_against: standing.goals_against,
                    team_logo: `${ajax_object.apiUrl2}/team/${standing.team_id}/image`,
                    scores: standing.live_score ? scores : "",
                  };
                  if (
                    standing.recent_matches &&
                    standing.recent_matches.length > 0
                  ) {
                    standing.recent_matches.forEach((result) => {
                      const title = `${result.home_scores[0]}:${
                        result.away_scores[0]
                      }&nbsp; (${result.home_team.name} - ${
                        result.away_team.name
                      }) ${self.formatDate("DD/MM/YYYY", result.match_time)}`;
                      formHTML += `<div class="formIcon formIcon--${determineMatchResult(
                        result,
                        standing.team_id
                      )}" title="${title}">${determineMatchResult(
                        result,
                        standing.team_id
                      )}</div>`;
                    });
                  }
                } else {
                  // home or away
                  filterFields = {
                    position_style: "",
                    highlight: highlightClass,
                    position: standing[`${filter}_position`],
                    total: standing[`${filter}_total`],
                    won: standing[`${filter}_won`],
                    draw: standing[`${filter}_draw`],
                    loss: standing[`${filter}_loss`],
                    goal_diff: standing[`${filter}_goal_diff`],
                    points: standing[`${filter}_points`],
                    goals: standing[`${filter}_goals`],
                    goals_against: standing[`${filter}_goals_against`],
                    team_logo: `${ajax_object.apiUrl2}/team/${standing.team_id}/image`,
                    scores: standing.live_score ? scores : "",
                  };
                  if (
                    standing[`${filter}_matches`] &&
                    standing[`${filter}_matches`].length > 0
                  ) {
                    standing[`${filter}_matches`].forEach((result) => {
                      const title = `${result.home_scores[0]}:${
                        result.away_scores[0]
                      }&nbsp; (${result.home_team.name} - ${
                        result.away_team.name
                      }) ${self.formatDate("DD/MM/YYYY", result.match_time)}`;
                      formHTML += `<div class="formIcon formIcon--${determineMatchResult(
                        result,
                        standing.team_id
                      )}" title="${title}">${determineMatchResult(
                        result,
                        standing.team_id
                      )}</div>`;
                    });
                  }
                }
                const populatedRow = self.buildTags(rowsTemplate, {
                  ...baseFields,
                  ...filterFields,
                  form: formHTML,
                });
                rowsHTML += populatedRow;
              });
              standingHTML += jQuery("#standing-template")
                .html()
                .replace(
                  "{$league_name}",
                  data.competition.type == 1 && item.group == 0
                    ? "Team"
                    : "Group " + groupName[item.group - 1]
                )
                .replace("{$rows}", rowsHTML);
          });
        data.standings.promotions.forEach((stagePhase) => {
          stagePhasesHTML += jQuery("#standing-stage-phase-template")
            .html()
            .replace("{$color}", stagePhase.color)
            .replace("{$name}", stagePhase.name);
        });
        standingFilter = jQuery("#standing-filter").html();
        jQuery(".standings").html(standingHTML).append(stagePhasesHTML);
      } catch (error) {
        console.log(error);
        jQuery('a[href="#tab-bxh"]').hide();
      }
      setTimeout(function () {
        self.xbdGetStanding(seasonId);
      }, 60000);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.status);
      if (jqXHR.status == 404) {
        // Xử lý khi trạng thái là 404 (không tìm thấy)
        console.log("File không tìm thấy");
      } else {
        // Xử lý lỗi khác
        jQuery("#tab-bxh").parent().hide();
        console.log("Lỗi: " + textStatus);
      }
    });
}
xbdGetStanding(seasonId);
jQuery(document).on("click", ".subFilter__group a", function (e) {
    e.preventDefault();
    const filterValue = jQuery(this).data("filter");
    // Add/remove active class
    jQuery(".subFilter__group a").removeClass("active");
    jQuery(this).addClass("active");
    xbdGetStanding(seasonId, filterValue);
});
jQuery(".tournamentTableSimplified").click(function () {
  jQuery(this).toggleClass("tournamentTableMobileResolver__icon--selected");
  if(jQuery(".tournament-table-tabs-and-content").hasClass('tournamentTableMobileResolver--show')) {
    jQuery(".table__cell--value").addClass("d-none");
    jQuery(".ui-table__header--value").addClass('d-none');
    
    jQuery('.ui-table__header').addClass('ui-table__header--short');
    jQuery('.ui-table__row').addClass('ui-table__row--short');
    // jQuery(".table__cell--value").removeClass("d-none");
    // jQuery(".ui-table__header--value").removeClass('d-none');
    // // jQuery(".ui-table__header--value").toggleClass("d-none");
    // // jQuery(".ui-table__headerCell,.table__cell--value").toggleClass('d-none');
    // // jQuery(".table__cell--goalsForAgainstDiff").toggleClass('d-none');
    // jQuery(".table__headerCell--form").toggleClass("d-none");
    jQuery(".ui-table__header--totals").toggleClass('d-none');
    jQuery(".table__cell--total").toggleClass('d-none');
    jQuery(".table__cell--score").toggleClass('d-none');
    jQuery(".table__cell--points").toggleClass('d-none');
    // jQuery(".ui-table__header--score").toggleClass("d-none");
    // jQuery(".ui-table__header--totals").toggleClass("d-none");
    // jQuery(".table__cell--form").addc("d-none");
    jQuery(".table__headerCell--form").addClass("d-none");
    jQuery(".table__cell--form").addClass("d-none");
    jQuery(".tournament-table-tabs-and-content").removeClass(
      "tournamentTableMobileResolver--show"
    );
  } else {
    jQuery(".table__cell--value").removeClass("d-none");
    jQuery(".ui-table__header--value").removeClass('d-none');
    // jQuery('.table__cell--value').addClass('d-none');
    // jQuery(".table__cell--score").removeClass('d-none');
    jQuery(".table__cell--points").removeClass('d-none');
    jQuery(".ui-table__header--totals").removeClass('d-none');
    jQuery(".table__cell--total").removeClass('d-none');
    jQuery(".table__headerCell--form").removeClass("d-none");
    jQuery(".table__cell--form").removeClass("d-none");
    jQuery('.ui-table__header').removeClass('ui-table__header--short');
    jQuery('.ui-table__row').removeClass('ui-table__row--short');
    jQuery(".tournament-table-tabs-and-content").addClass(
      "tournamentTableMobileResolver--show"
    );
  }
  
});