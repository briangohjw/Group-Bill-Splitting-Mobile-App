jQuery("#simulation")
  .on("click", ".s-1db2489a-f8c0-41c6-98a9-572646260ea2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Status"
                },"S1R0" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a9f1e704-c7fa-440e-9e34-467a9a935d02",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Status"
                },"S1R0.5" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c596717e-8b6b-4441-ba6a-49f8e7b04b11",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b4063e75-0918-468f-afff-70df5195bbd3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-1db2489a-f8c0-41c6-98a9-572646260ea2 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_20" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-1db2489a-f8c0-41c6-98a9-572646260ea2 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_15" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_17" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_18" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_19" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "No. of Netflix Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_20" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimConcat",
                        "parameter": [ "$",{
                          "action": "jimRound",
                          "parameter": [ {
                            "action": "jimDivide",
                            "parameter": [ {
                              "datatype": "variable",
                              "element": "Total Cost"
                            },{
                              "datatype": "variable",
                              "element": "No. of Netflix Members"
                            } ]
                          },"2" ]
                        } ]
                      }," / month" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });