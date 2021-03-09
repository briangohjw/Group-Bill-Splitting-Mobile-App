jQuery("#simulation")
  .on("click", ".s-56b99ea6-6667-4f50-b4a8-87ebe22ea723 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/677e95a0-e38d-41dc-ab1b-072ef17bfa76",
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
                    "target": "screens/587f40c0-5a4e-4e8e-8181-a132bc1dbba9",
                    "transition": {
                      "type": "slideleft",
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
    }
  })
  .on("pageload", ".s-56b99ea6-6667-4f50-b4a8-87ebe22ea723 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "No. of Netflix Members" ],
                    "value": "5"
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
    } else if(jFirer.is("#s-Text_15")) {
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
  .on("variablechange.jim", ".s-56b99ea6-6667-4f50-b4a8-87ebe22ea723 .variablechange", function(event, data) {
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
    } else if(jFirer.is("#s-Text_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Chosen Members"),
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_21" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Chosen Members"
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