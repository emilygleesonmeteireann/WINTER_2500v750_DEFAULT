

title = 'Surface verification' 

framec='Goldenrod'

v[0] = ['V','V_VAR','PS','ps','f','v'];
t[0] = ['Fc length ver','Fc length var','Timeserie stat','Timeserie','Freq dist.','Dayvar'];
v[1] = ['00000000']
t[1] = ['00000000']
v[2] = ['00000000','00003953','00003975','00003963']
t[2] = ['ALL','Valentia','MtDillon','MaceHead']
v[3] = ['ALL','Ireland'] ;
t[3] = v[3] ;
v[4] = ['PS','FF','GX','TT','TD','QQ','RH','NN','PE1','PE3','PE6','PE12','PE24','LC','CH'];
t[4] = ['Mslp','U10m','Max Wind Gust','T2m','Td2m','Q2m','Rh2m','Cloud cover','1h Precipitation','3h Precipitation','6h Precipitation','12h Precipitation','24h Precipitation','Low clouds','Cloud base']
v[5] = [0] ;
v[5] = v[5].reverse()
t[5] = v[5]
v[6] = ['ALL','00','12'] ;
t[6] = v[6] ;
mname = ['Type','Period','Station','Selection','Parameter','Level','Initial time']
loc = ['l','l','t','t','t','l','l']
spec_name =[0,1,2,3,6,4,5]

do_debug = false ; ;

help = ''; hide_help = false ;
pdir ='Surface/'
ext='1.png'
do_send = true ;
do_show_remember = true ;
do_remember = true ;
my_con_txt=['Graphics','Quality control','Stat','Stations']
my_con=['All','Surface/quality_[1].html','Surface/TABLE_LL_[1]_[3].html','Surface/[4]_[1].xml']
