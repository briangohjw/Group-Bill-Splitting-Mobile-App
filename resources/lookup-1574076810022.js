(function(window, undefined) {
  var dictionary = {
    "482dec22-2db2-44ca-9720-b0c518781288": "Spotify Overview (NEW)",
    "f5f90065-39b6-4351-9cf2-4e6e1d0bdf00": "Val Groups (S1R0.5)",
    "4edbda41-5812-4951-999c-4d456b5ce872": "Val Indi",
    "38d161c4-9fd1-464c-9326-59a2b15f5354": "Spotify Payment (Val)",
    "31346d38-f5d0-4300-9cbf-fa8565d141d7": "Set Up Group (House)",
    "3aeeaea7-20ff-4124-89b1-7fec96bceb67": "PayPal Home (Val)",
    "b4063e75-0918-468f-afff-70df5195bbd3": "Spotify Activity (Val)",
    "a245f558-534b-43c4-8fef-8a596756aa1d": "Group (spotify pending, no rental) NOTIF",
    "42baa9a3-42af-4c79-8357-ac327dc16a0b": "Rental Confirmation",
    "1347e297-f903-4f43-b827-04418b748808": "Val Groups (Spotify Notif)",
    "5414c1e3-f49d-4e13-aa63-e54868451dd1": "Group (spotify cfm, rental pending)",
    "c596717e-8b6b-4441-ba6a-49f8e7b04b11": "Val Groups (S1R0.5) NO NOTIF",
    "3d560776-f226-4982-bd43-1e1e9d4b6071": "External Payee VS No Payee",
    "1db2489a-f8c0-41c6-98a9-572646260ea2": "Spotify Overview (Val)",
    "6a3b22e4-4ec7-4794-b907-dcf9ad96ae68": "Spotify Overview (EDIT VAL)",
    "17c048e8-0cdf-42fb-8a9e-cb09409ced93": "2. Confirm Group Members",
    "2ba6ed05-c4e9-4134-8427-b99758b24b71": "Spotify TNCs (Val, Detailed)",
    "cf5feb7b-4e17-47d4-9533-debaa612881e": "Rental TNCs (Leader, Simplified)",
    "a9f1e704-c7fa-440e-9e34-467a9a935d02": "Val Groups (Spotify Confirmed)",
    "997f2db5-4ba0-4246-b302-fb82afd2f75d": "Spotify TNCs (Leader, Simplified)",
    "c484915a-1936-459b-8386-713637897cbf": "Val Kicked Confirmation Msg",
    "c87855ef-3f67-4c2f-a935-8614fbeed5f9": "Spotify Payment (Leader)",
    "1069e294-99db-4005-8e75-8d366129b3f1": "Spotify Confirmation (Val)",
    "ec79065f-aa0e-447f-ab41-e5bc90e53198": "Spotify Val Kicked",
    "7a6590f5-d3de-4106-a039-27c574c6d3f8": "Group (spotify pending, no rental)",
    "38841e72-e0ba-49e5-ae03-e5f07b958a32": "Pay To (Search)",
    "c9272cbd-5732-4a34-9505-23d6eb125593": "Spotify Pending",
    "12b4ccdb-5ea1-4f0e-a6b8-51d3afc4a3f2": "Indi",
    "65ec989c-0da4-4846-80b9-b6286ec3931c": "Spotify TNCs (Leader, Detailed)",
    "ceb4945b-cf96-4e5e-946e-f505371d0c14": "Set Up Group (Spotify)",
    "3fdcc9d2-2748-4c04-a1cd-d99f96ba7ab2": "Spotify Val Kicked Pending",
    "e8f2c2ae-2540-43f4-bae9-1c60a2c5b760": "Group (spotify cfm, rental cfm)",
    "ddf389c0-025e-458b-9276-803c5e3b5137": "Group (spotify cfm, no rental)",
    "f9ffb4e9-a189-48f8-9dc8-7ffb2dbc10ea": "Subscription Confirmation",
    "cf3abab0-66dc-467a-a52e-69aa506952f5": "Val Groups (None)",
    "892a0977-8108-4094-bcbe-0b372ff94f59": "Spotify Activity (LEADER)",
    "677e95a0-e38d-41dc-ab1b-072ef17bfa76": "Val Groups (Spotify Pending, NO NOTIF)",
    "2f5f7ad6-9ffc-4ed3-9320-1c165f55b674": "PayPal Home",
    "587f40c0-5a4e-4e8e-8181-a132bc1dbba9": "Spotify TNCs (Val, Simplified)",
    "1334a6eb-a9b2-4dda-920f-5b6dcd8a45e6": "Confirm Group Members (House)",
    "15258e50-e4f8-4f9f-8d84-64da761b5d40": "Create Custom",
    "56b99ea6-6667-4f50-b4a8-87ebe22ea723": "Confirm Spotify Members (Val)",
    "f8342722-bdd9-4d60-8628-5990c6e3b124": "Popular OR Custom",
    "ee7be2aa-05cd-452d-a92e-ef50e9399c96": "Rental TNCs (Leader, Detailed)",
    "3f7cae33-ab77-43c8-b88b-19418c49b038": "Group (none)",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Base",
    "d552f0c2-e379-495e-9930-618e0356e58d": "Faces",
    "08e126e3-df91-474c-bd94-371f681846c2": "Blue Confirm Button",
    "2ecee51c-7273-4216-9b19-1f8b02a49877": "Grey Divider Line",
    "d6918039-ec22-4819-81c3-aee48c55b85a": "Confirm Button",
    "12684675-82aa-426a-a6f2-bf6dc0b91261": "Back Button",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);