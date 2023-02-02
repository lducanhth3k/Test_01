/////
//Office 365 Proxy Automatic Configuration File
//built from Office 365 Automatic Proxy PAC File Creator
//
//Author: aaron.guilmette@microsoft.com
//Link: https://gallery.technet.microsoft.com/Office-365-Proxy-Pac-60fb28f7
///
function FindProxyForURL(url, host)
{
	var ip = myIpAddress();
	var ProxyThe_NEW = "PROXY 10.56.221.100:3128";
   	var VIP156_NEW = "PROXY 10.56.224.156:3128; PROXY proxyst-as.iws-hybrid.trendmicro.com:80; DIRECT";
	var VIP166_NEW = "PROXY 10.56.224.166:3128; PROXY proxyst-as.iws-hybrid.trendmicro.com:80; DIRECT";
	var ProxyERP_NEW = "PROXY 10.56.224.213:3128; PROXY proxyst-as.iws-hybrid.trendmicro.com:80; DIRECT";
	var lhost = host.toLowerCase();
    	host = lhost;
// Neu web acb tren azure cname va domain co ip public
    if (shExpMatch(host, "developer.acb.com.vn") ||shExpMatch(host, "win.acb.com.vn") ||
	shExpMatch(host, "phunu.acb.com.vn") || shExpMatch(host, "business.dev.acb.com.vn") || 
	shExpMatch(host, "performance.acb.com.vn") || shExpMatch(host, "iq.acb.com.vn") || 
	shExpMatch(host, "event.acb.com.vn") || shExpMatch(host, "learning.acb.com.vn") || 
	shExpMatch(host, "usertalent.acb.com.vn") || shExpMatch(host, "tkkd.acb.com.vn") || 
	shExpMatch(host, "greenteller-demo.acb.vn") || shExpMatch(host, "quiz.acb.vn")  || 
	shExpMatch(host, "phaidep.acb.vn") || shExpMatch(host, "brand.acb.vn") || 
	shExpMatch(host, "talent.acb.com.vn")  || shExpMatch(host, "admintalent.acb.com.vn") || shExpMatch(host, "s-eyes.acbs.com.vn"))
	return VIP156_NEW;
// Neu di mang noi bo thi kg di qua proxy
    if (isPlainHostName(host) || shExpMatch(host, "*.acbcapital.com.vn") ||	
	shExpMatch(host, "localhost") || shExpMatch(host, "*.acb.local") ||
        shExpMatch(host, "acb.com.vn") || shExpMatch(host, "*.acb.com.vn") ||
	shExpMatch(host, "acb.vn") || shExpMatch(host, "*.acbtest.vn") || shExpMatch(host, "*.acbsystem.local") ||
	isInNet(dnsResolve(host), "127.0.0.1", "255.255.255.255") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
	isInNet(dnsResolve(host), "138.229.0.0",  "255.255.0.0")) 
        return "DIRECT";
// Neu client ip match phia duoi di truc tiep
    if (shExpMatch(ip, "192.168.234.3?") || shExpMatch(ip, "192.168.234.4?") ||
	shExpMatch(ip, "192.168.234.5?") || shExpMatch(ip, "192.168.234.6?") ||
	shExpMatch(ip, "192.168.234.7?") || shExpMatch(ip, "192.168.234.8?") ||
	shExpMatch(ip, "192.168.234.9?") || shExpMatch(ip, "192.168.234.10?") ||
	shExpMatch(ip, "192.168.234.11?") || shExpMatch(ip, "192.168.234.12?") ||
	shExpMatch(ip, "192.168.234.13?") || shExpMatch(ip, "192.168.234.14?") ||
	shExpMatch(ip, "192.168.234.150") || shExpMatch(ip, "192.168.235.41"))
    	return "DIRECT";
		
//Loai tru khoi thi truong tai chinh di truc tiep
    if (isInNet(ip, "10.56.170.0", "255.255.255.0"))
    	return "DIRECT";

// Loai tru subnet di truc tiep 10.56.157 ktc bcp office 365 viet dan huong di cao thang qua duong office365
    if (isInNet(ip, "10.56.157.0", "255.255.255.0"))
    	return "DIRECT";
// Neu di mang ngan hang nha nuoc cbp.sbv.gov.vn
    if (shExpMatch(host, "cbp.sbv.gov.vn"))
	return "DIRECT";
// Neu di dsts.napas.com.vn thanh toan noi dia
    if (shExpMatch(host, "dsts.napas.com.vn"))
	return ProxyThe_NEW;
//di Web quan trong
    if (shExpMatch(host, "ketnoi.aia.com.vn") || shExpMatch(host, "wupos.westernunion.com") || shExpMatch(host, "cic.org.vn") || shExpMatch(host, "dichvuthongtin.dkkd.gov.vn"))
	return VIP156_NEW;
//di ERP-OracleCloub
    if (shExpMatch(host, "*.oraclecloud.com") || shExpMatch(host, "*.oraclecloud.edgekey.net") || shExpMatch(host, "*.oracle.com") || shExpMatch(host, "*.oraclecloud.com.edgekey.net"))
	return ProxyERP_NEW;
//lien quan di ERP
    if (shExpMatch(host, "*.akadns.net") || shExpMatch(host, "*.cloudapp.azure.com") || shExpMatch(host, "*.akamaiedge.net"))
	return ProxyERP_NEW;
//di update rootca ctldl.windowsupdate.com
    if (shExpMatch(host, "ctldl.windowsupdate.com"))
	return VIP166_NEW;
//di azurewebsites.net
    if (shExpMatch(host, "*.azurewebsites.net"))
	return VIP166_NEW;
//di support.microsoft.com xem video eus-streaming-video-rt-microsoft-com.akamaized.net prod-video-cms-rt-microsoft-com.akamaized.net va cac trang khac
    if (shExpMatch(host, "*.akamaized.net"))
       return VIP166_NEW;
//di Cloud App Security Conditional Access App Control
    if (shExpMatch(host, "*.cas.ms") || shExpMatch(host, "*.mcas.ms"))
       return VIP166_NEW;
//Loai tru khoi ngan hang so di truc tiep
    if (isInNet(ip, "192.168.61.0", "255.255.255.0"))
    	return "DIRECT";
//di Office365 - All
    if(shExpMatch(host, "outlook.com")
	|| shExpMatch(host, "office.com")
	|| shExpMatch(host, "*.broadcast.skype.com")
        || shExpMatch(host, "*.lync.com")
        || shExpMatch(host, "*.mail.protection.outlook.com")
        || shExpMatch(host, "*.manage.office.com")
        || shExpMatch(host, "*.msappproxy.net")
        || shExpMatch(host, "*.outlook.office.com")
        || shExpMatch(host, "*.portal.cloudappsecurity.com")
        || shExpMatch(host, "*.protection.office.com")
        || shExpMatch(host, "*.protection.outlook.com")
        || shExpMatch(host, "*.skypeforbusiness.com")
        || shExpMatch(host, "*.teams.microsoft.com")
        || shExpMatch(host, "*broadcast.officeapps.live.com")
        || shExpMatch(host, "*excel.officeapps.live.com")
        || shExpMatch(host, "*onenote.officeapps.live.com")
        || shExpMatch(host, "*powerpoint.officeapps.live.com")
        || shExpMatch(host, "*rtc.officeapps.live.com")
        || shExpMatch(host, "*shared.officeapps.live.com")
        || shExpMatch(host, "*view.officeapps.live.com")
        || shExpMatch(host, "*visio.officeapps.live.com")
        || shExpMatch(host, "*word-edit.officeapps.live.com")
        || shExpMatch(host, "*word-view.officeapps.live.com")
        || shExpMatch(host, "acbvn.sharepoint.com")
        || shExpMatch(host, "acbvn-my.sharepoint.com")
        || shExpMatch(host, "account.activedirectory.windowsazure.com")
        || shExpMatch(host, "account.office.net")
        || shExpMatch(host, "accounts.accesscontrol.windows.net")
        || shExpMatch(host, "admin.microsoft.com")
        || shExpMatch(host, "adminwebservice.microsoftonline.com")
        || shExpMatch(host, "api.login.microsoftonline.com")
        || shExpMatch(host, "api.passwordreset.microsoftonline.com")
        || shExpMatch(host, "autologon.microsoftazuread-sso.com")
        || shExpMatch(host, "becws.microsoftonline.com")
        || shExpMatch(host, "broadcast.skype.com")
        || shExpMatch(host, "clientconfig.microsoftonline-p.net")
        || shExpMatch(host, "companymanager.microsoftonline.com")
        || shExpMatch(host, "device.login.microsoftonline.com")
        || shExpMatch(host, "graph.microsoft.com")
        || shExpMatch(host, "graph.windows.net")
        || shExpMatch(host, "hip.microsoftonline-p.net")
        || shExpMatch(host, "hipservice.microsoftonline.com")
        || shExpMatch(host, "home.office.com")
        || shExpMatch(host, "login.microsoft.com")
        || shExpMatch(host, "login.microsoftonline.com")
        || shExpMatch(host, "login.microsoftonline-p.com")
        || shExpMatch(host, "login.windows.net")
        || shExpMatch(host, "logincert.microsoftonline.com")
        || shExpMatch(host, "loginex.microsoftonline.com")
        || shExpMatch(host, "login-us.microsoftonline.com")
        || shExpMatch(host, "manage.office.com")
        || shExpMatch(host, "nexus.microsoftonline-p.com")
        || shExpMatch(host, "nexus.officeapps.live.com")
        || shExpMatch(host, "nexusrules.officeapps.live.com")
        || shExpMatch(host, "office.live.com")
        || shExpMatch(host, "outlook.office.com")
        || shExpMatch(host, "outlook.office365.com")
        || shExpMatch(host, "passwordreset.microsoftonline.com")
        || shExpMatch(host, "portal.microsoftonline.com")
        || shExpMatch(host, "portal.office.com")
        || shExpMatch(host, "protection.office.com")
        || shExpMatch(host, "provisioningapi.microsoftonline.com")
        || shExpMatch(host, "smtp.office365.com")
        || shExpMatch(host, "teams.microsoft.com")
	|| shExpMatch(host, "www.office.com")
	|| shExpMatch(host, "*.delve.office.com")
	|| shExpMatch(host, "delve.office.com")
	|| shExpMatch(host, "*.aria.microsoft.com")
	|| shExpMatch(host, "aadcdn.msftauth.net")		
	|| shExpMatch(host, "attachments.office.net")
	|| shExpMatch(host, "login.live.com")
	|| shExpMatch(host, "secure.aadcdn.microsoftonline-p.com")
	|| shExpMatch(host, "*.yammer.com")
	|| shExpMatch(host, "*.yammerusercontent.com")
	|| shExpMatch(host, "*.assets-yammer.com")
	|| shExpMatch(host, "www.outlook.com")	
	|| shExpMatch(host, "r1.res.office365.com")
	|| shExpMatch(host, "r3.res.office365.com")
	|| shExpMatch(host, "r4.res.office365.com")	
	|| shExpMatch(host, "*.log.optimizely.com")
	|| shExpMatch(host, "click.email.microsoftonline.com")
	|| shExpMatch(host, "ssw.live.com")
	|| shExpMatch(host, "storage.live.com")
	|| shExpMatch(host, "*.trafficmanager.net")	
	|| shExpMatch(host, "admin.onedrive.com")
	|| shExpMatch(host, "officeclient.microsoft.com")
	|| shExpMatch(host, "skydrive.wns.windows.com")
	|| shExpMatch(host, "g.live.com")
	|| shExpMatch(host, "oneclient.sfx.ms")
	|| shExpMatch(host, "*.sharepointonline.com")
	|| shExpMatch(host, "spoprod-a.akamaihd.net")	
	|| shExpMatch(host, "prod.msocdn.com")
	|| shExpMatch(host, "watson.telemetry.microsoft.com")
	|| shExpMatch(host, "*.svc.ms")
	|| shExpMatch(host, "acbvn-files.sharepoint.com")
	|| shExpMatch(host, "acbvn-myfiles.sharepoint.com")
	|| shExpMatch(host, "quicktips.skypeforbusiness.com")
	|| shExpMatch(host, "*.sfbassets.com")
	|| shExpMatch(host, "*.urlp.sfbassets.com")	
	|| shExpMatch(host, "*.keydelivery.mediaservices.windows.net")
	|| shExpMatch(host, "*.streaming.mediaservices.windows.net")	
	|| shExpMatch(host, "*.msecnd.net")
	|| shExpMatch(host, "*.microsoft.com")
	|| shExpMatch(host, "mlccdn.blob.core.windows.net")
	|| shExpMatch(host, "aka.ms")
	|| shExpMatch(host, "amp.azure.net")
	|| shExpMatch(host, "*.users.storage.live.com")
	|| shExpMatch(host, "*.adl.windows.com")	
	|| shExpMatch(host, "*.msedge.net")
	|| shExpMatch(host, "*.msg.skype.com")
	|| shExpMatch(host, "compass-ssl.microsoft.com")
	|| shExpMatch(host, "*.mstea.ms")
	|| shExpMatch(host, "*.secure.skypeassets.com")
	|| shExpMatch(host, "mlccdnprod.azureedge.net")
	|| shExpMatch(host, "videoplayercdn.osi.office.net")
	|| shExpMatch(host, "*.api.skype.com")
	|| shExpMatch(host, "*.asm.skype.com")
	|| shExpMatch(host, "*.broker.skype.com")
	|| shExpMatch(host, "*.cc.skype.com")
	|| shExpMatch(host, "*.config.skype.com")
	|| shExpMatch(host, "*.conv.skype.com")
	|| shExpMatch(host, "*.pipe.skype.com")
	|| shExpMatch(host, "*.teams.skype.com")
	|| shExpMatch(host, "config.edge.skype.com")
	|| shExpMatch(host, "feedback.skype.com")
	|| shExpMatch(host, "latest-swx.cdn.skype.com")
	|| shExpMatch(host, "pipe.skype.com")
	|| shExpMatch(host, "prod.registrar.skype.com")
	|| shExpMatch(host, "prod.tpc.skype.com")
	|| shExpMatch(host, "Skypegraph.skype.com")
	|| shExpMatch(host, "swx.cdn.skype.com")
	|| shExpMatch(host, "r3.res.outlook.com")	
	|| shExpMatch(host, "*.api.microsoftstream.com")
	|| shExpMatch(host, "*.cloudapp.net")
	|| shExpMatch(host, "*.notification.api.microsoftstream.com")
	|| shExpMatch(host, "api.microsoftstream.com")
	|| shExpMatch(host, "az416426.vo.msecnd.net")
	|| shExpMatch(host, "s0.assets-yammer.com")
	|| shExpMatch(host, "vortex.data.microsoft.com")
	|| shExpMatch(host, "web.microsoftstream.com")
	|| shExpMatch(host, "amsglob0cdnstream11.azureedge.net")
	|| shExpMatch(host, "amsglob0cdnstream12.azureedge.net")
	|| shExpMatch(host, "nps.onyx.azure.net")
	|| shExpMatch(host, "*.azureedge.net")
	|| shExpMatch(host, "*.media.azure.net")	
	|| shExpMatch(host, "*.cdn.office.net")
	|| shExpMatch(host, "contentstorage.osi.office.net")
	|| shExpMatch(host, "*.onenote.com")
	|| shExpMatch(host, "*cdn.onenote.net")	
	|| shExpMatch(host, "apis.live.net")
	|| shExpMatch(host, "cdn.optimizely.com")
	|| shExpMatch(host, "officeapps.live.com")
	|| shExpMatch(host, "www.onedrive.com")
	|| shExpMatch(host, "ccs.login.microsoftonline.com")	
	|| shExpMatch(host, "*.adhybridhealth.azure.com")
	|| shExpMatch(host, "*.phonefactor.net")
	|| shExpMatch(host, "*.blob.core.windows.net")
	|| shExpMatch(host, "*.hockeyapp.net")
	|| shExpMatch(host, "delve-gcc.office.com")
	|| shExpMatch(host, "suite.office.net")
	|| shExpMatch(host, "webshell.suite.office.com")
	|| shExpMatch(host, "*.events.data.microsoft.com")
	|| shExpMatch(host, "*.office365.com")
	|| shExpMatch(host, "*.office.com")
	|| shExpMatch(host, "*.office.net")
	|| shExpMatch(host, "*.msocdn.com")
	|| shExpMatch(host, "activation.sls.microsoft.com")
	|| shExpMatch(host, "crl.microsoft.com")
	|| shExpMatch(host, "ocws.officeapps.live.com")
	|| shExpMatch(host, "odc.officeapps.live.com")
	|| shExpMatch(host, "ols.officeapps.live.com")
	|| shExpMatch(host, "office15client.microsoft.com")	
	|| shExpMatch(host, "ocsa.officeapps.live.com")
	|| shExpMatch(host, "insertmedia.bing.office.net")
	|| shExpMatch(host, "mrodevicemgr.officeapps.live.com")
	|| shExpMatch(host, "cdn.odc.officeapps.live.com")
	|| shExpMatch(host, "officecdn.microsoft.com")
	|| shExpMatch(host, "officecdn.microsoft.com.edgesuite.net")
	|| shExpMatch(host, "*.tasks.osi.office.net")
	|| shExpMatch(host, "tasks.office.com")
	|| shExpMatch(host, "ajax.aspnetcdn.com")
	|| shExpMatch(host, "eus-www.sway-cdn.com")
	|| shExpMatch(host, "wus-www.sway-cdn.com")
	|| shExpMatch(host, "eus-www.sway-extensions.com")
	|| shExpMatch(host, "wus-www.sway-extensions.com")
	|| shExpMatch(host, "sway.com")
	|| shExpMatch(host, "www.sway.com")
	|| shExpMatch(host, "sway.office.com")
	|| shExpMatch(host, "*.aadrm.com")
	|| shExpMatch(host, "*.azurerms.com")
	|| shExpMatch(host, "*.informationprotection.azure.com")
	|| shExpMatch(host, "ecn.dev.virtualearth.net")
	|| shExpMatch(host, "informationprotection.hosting.portal.azure.net")
	|| shExpMatch(host, "*.microsoftonline.com")
	|| shExpMatch(host, "*.microsoftonline-p.com")
	|| shExpMatch(host, "*.microsoftonline-p.net")
	|| shExpMatch(host, "*.onmicrosoft.com")
	|| shExpMatch(host, "*.staffhub.office.com")
	|| shExpMatch(host, "*.officeapps.live.com")
	|| shExpMatch(host, "policykeyservice.dc.ad.msft.net")
	|| shExpMatch(host, "*.windows.net")	
	|| shExpMatch(host, "*.msauth.net")
	|| shExpMatch(host, "*.msauthimages.net")
	|| shExpMatch(host, "*.msftauth.net")
	|| shExpMatch(host, "*.msftauthimages.net")
	|| shExpMatch(host, "*.omniroot.com")
	|| shExpMatch(host, "ocsp.msocsp.com")
	|| shExpMatch(host, "*.outlook.com")
	|| shExpMatch(host, "*.azure.com")
	|| shExpMatch(host, "*.azure-apim.net")
	|| shExpMatch(host, "*.dynamics.com")
	|| shExpMatch(host, "*.api.powerplatform.com")
	|| shExpMatch(host, "msmanaged-na.azure-apim.net")	
	|| shExpMatch(host, "*.powerapps.us")
	|| shExpMatch(host, "*.powerautomate.com")
	|| shExpMatch(host, "*.appsplatform.us"))				
    	return VIP166_NEW;
    
// Neu Loai tru subnet di truc tiep 10.56.12 Phong dau tu ip public dong nen cho xuong cuoi de office365 di qua proxy kg bi blockdownload
    if (isInNet(ip, "10.56.12.0", "255.255.255.0"))
    	return "DIRECT";
// Neu subnet con lai di qua Proxy 10.56.224.156		
    return VIP156_NEW;
}
