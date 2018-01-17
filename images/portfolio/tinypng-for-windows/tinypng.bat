rem you can get APIKEY from https://tinypng.com/
set APIKEY=I1A8fTUCOdcCYWHSLZ5Rh44iOwEifS5G
 
rem if set prefix or (and) suffix, not overwrite original file.
set PREFIX=
set SUFFIX=
 
 
for %%p in ( *.png,*.jpg ) do (
  for /f "tokens=1,2 usebackq" %%j in ( `curl -k -i --user api:%APIKEY% --data-binary @%%p https://api.tinypng.com/shrink` ) do (
    if "%%j"=="Location:" curl -k %%k > %PREFIX%%%p%SUFFIX%
  )
)