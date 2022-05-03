SELECT 
      '"'||   'CONTACT:S_ORIGINALKEY__C'    ||'"'||','||
      '"'||   'RecordTypeId'              ||'"'||','||
      '"'||   'Campaign__r:S_OriginalKey__c' ||'"'||','||
      '"'||   'CallContent__c'            ||'"'||','||
--      '"'||   'TMAgent__r:S_OriginalKey__c'      ||'"'||','||
      '"'||   'ReCallDT__c'               ||'"'||','||
      '"'||   'DesiredDate__c'            ||'"'||','||
      '"'||   'IsUrgent__c'               ||'"'||','||
      '"'||   'CarryType__c'              ||'"'||','||
      '"'||   'CarryResult__c'            ||'"'||','||
      '"'||   'TMDate__c'                 ||'"'||','||
      '"'||   'TMType1__c'                ||'"'||','||
      '"'||   'TMType2__c'                ||'"'||','||
      '"'||   'TMType3__c'                ||'"'||','||
      '"'||   'TMType3Desc__c'            ||'"'||','||
      '"'||   'TMResult1__c'              ||'"'||','||
      '"'||   'TMResult2__c'              ||'"'||','||
      '"'||   'TMResult3__c'              ||'"'||','||
--      '"'||   'JoinUser__r:S_OriginalKey__c'   ||'"'||','||
      '"'||   'RunType__c'                ||'"'||','||
      '"'||   'IsNoShow__c'               ||'"'||','||
      '"'||   'TMCount__c'                ||'"'||','||
      '"'||   'IsReserveCall__c'          ||'"'||','||
      '"'||   'TMTarget__c'               ||'"'||','||
      '"'||   'MasterCase__c'             ||'"'||','||
      '"'||   'S_IsAdmin__c'              ||'"'||','||
      '"'||   'S_IsMig__c'                ||'"'||','||
      '"'||   'S_OriginalKey__c'          ||'"'||','||
      '"'||   'S_mig_LastModifiedById__c' ||'"'||','||
      '"'||   'OwnerId:CtiID__c'          ||'"'||','||
      '"'||   'Content__c'                ||'"'||','||
      '"'||   'ReceptionNo__c'            ||'"'||','||
      '"'||   'ClaimType1__c'             ||'"'||','||
      '"'||   'ClaimType2__c'             ||'"'||','||
      '"'||   'ClaimType3__c'             ||'"'||','||
      '"'||   'ClaimType4__c'             ||'"'||','||
      '"'||   'ClaimType5__c'             ||'"'
FROM DUAL
UNION ALL
SELECT * FROM(
      SELECT 
      '"'||   contactid                   ||'"'||','||
      '"'||   RecordTypeId                ||'"'||','||
      '"'||   Campaign__c                 ||'"'||','||
      '"'||   REPLACE(CallContent__c,'"','""') ||'"'||','||
--      '"'||   TMAgent__c                  ||'"'||','||
      '"'||   ReCallDT__c                 ||'"'||','||
      '"'||   DesiredDate__c              ||'"'||','||
      '"'||   IsUrgent__c                 ||'"'||','||
      '"'||   CarryType__c                ||'"'||','||
      '"'||   CarryResult__c              ||'"'||','||
      '"'||   TMDate__c                   ||'"'||','||
      '"'||   TMType1__c                  ||'"'||','||
      '"'||   TMType2__c                  ||'"'||','||
      '"'||   TMType3__c                  ||'"'||','||
      '"'||   TMType3Desc__c              ||'"'||','||
      '"'||   tmresult1__c                ||'"'||','||
      '"'||   TMResult2__c                ||'"'||','||
      '"'||   TMResult3__c                ||'"'||','||
--      '"'||   JoinUser__c                 ||'"'||','||
      '"'||   RunType__c                  ||'"'||','||
      '"'||   IsNoShow__c                 ||'"'||','||
      '"'||   TMCount__c                  ||'"'||','||
      '"'||   IsReserveCall__c            ||'"'||','||
      '"'||   TMTarget__c                 ||'"'||','||
      '"'||   MasterCase__c               ||'"'||','||
      '"'||   S_IsAdmin__c                ||'"'||','||
      '"'||   S_IsMig__c                  ||'"'||','||
      '"'||   S_OriginalKey__c            ||'"'||','||
      '"'||   S_mig_LastModifiedById__c   ||'"'||','||
      '"'||   S_mig_OwnerId__c            ||'"'||','||
      '"'||   CASE WHEN LENGTHB(Content__c) > 2000 THEN NULL
                   ELSE REPLACE(Content__c,'"','""')
              END                         ||'"'||','||
      '"'||   ReceptionNo__c              ||'"'||','||
      '"'||   ClaimType1__c               ||'"'||','||
      '"'||   ClaimType2__c               ||'"'||','||
      '"'||   ClaimType3__c               ||'"'||','||
      '"'||   ClaimType4__c               ||'"'||','||
      '"'||   ClaimType5__c               ||'"'
  FROM MIG_Case
  WHERE SEQ >= (select min(seq) from MIG_Case) +1500000  
  ORDER BY contactid)
;
