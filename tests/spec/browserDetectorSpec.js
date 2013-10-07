
/*-----------------------------
	User
-----------------------------*/

describe("Instanciate a browser detector", function () {
	it("His Browser is Firefox 25 on Windows 7", function() {
		var firefox25 = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0";
		expect(
			(new  Browser.Detector(firefox25)).getBrowser()
		).toEqual("mozilla");
		expect(
			(new  Browser.Detector(firefox25)).getVersion()
		).toEqual("25.0");
		expect(
			(new  Browser.Detector(firefox25)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(firefox25)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(firefox25)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(firefox25)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(firefox25)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(firefox25)).isIE()
		).toBe(false);
	});

	it("His Browser is Chrome 30 on Windows 8", function() {
		var chrome30 = "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36";
		expect(
			(new  Browser.Detector(chrome30)).getBrowser()
		).toEqual("chrome");
		expect(
			(new  Browser.Detector(chrome30)).getVersion()
		).toEqual("30.0.1599.17");
		expect(
			(new  Browser.Detector(chrome30)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(chrome30)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(chrome30)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(chrome30)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(chrome30)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(chrome30)).isIE()
		).toBe(false);
	});

	it("His Browser is Opera 9 on Windows Vista", function() {
		var opera9 = "Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14";
		expect(
			(new  Browser.Detector(opera9)).getBrowser()
		).toEqual("opera");
		expect(
			(new  Browser.Detector(opera9)).getVersion()
		).toEqual("12.14");
		expect(
			(new  Browser.Detector(opera9)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(opera9)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(opera9)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(opera9)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(opera9)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(opera9)).isIE()
		).toBe(false);
	});

        it("His Browser is Safari 6 on iPad", function() {
		var safari6 = "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25";
		expect(
			(new  Browser.Detector(safari6)).getBrowser()
		).toEqual("webkit");
		expect(
			(new  Browser.Detector(safari6)).getVersion()
		).toEqual("536.26");
		expect(
			(new  Browser.Detector(safari6)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(safari6)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(safari6)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(safari6)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(safari6)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(safari6)).isIE()
		).toBe(false);
	});

	it("His Browser is Internet Explorer 6 on Windows XP", function() {
		var ie6 = "Mozilla/5.0 (Windows; U; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)";
		expect(
			(new  Browser.Detector(ie6)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie6)).getVersion()
		).toEqual("6.0");
		expect(
			(new  Browser.Detector(ie6)).isIE6()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie6)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 6.01 on Windows Vista", function() {
		var ie6 = "Mozilla/4.0 (compatible; MSIE 6.01; Windows NT 6.0)";
		expect(
			(new  Browser.Detector(ie6)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie6)).getVersion()
		).toEqual("6.01");
		expect(
			(new  Browser.Detector(ie6)).isIE6()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie6)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 6.1 on Windows XP", function() {
		var ie6 = "Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
		expect(
			(new  Browser.Detector(ie6)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie6)).getVersion()
		).toEqual("6.1");
		expect(
			(new  Browser.Detector(ie6)).isIE6()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie6)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie6)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 7.0 on Windows Vista", function() {
		var ie7 = "Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)";
		expect(
			(new  Browser.Detector(ie7)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie7)).getVersion()
		).toEqual("7.0");
		expect(
			(new  Browser.Detector(ie7)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE7()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie7)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 7.0b on Windows Vista", function() {
		var ie7 = "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 6.0)";
		expect(
			(new  Browser.Detector(ie7)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie7)).getVersion()
		).toEqual("7.0b");
		expect(
			(new  Browser.Detector(ie7)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE7()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie7)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 7.0 on Windows 8", function() {
		var ie7 = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/6.0; .NET4.0E; .NET4.0C)";
		expect(
			(new  Browser.Detector(ie7)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie7)).getVersion()
		).toEqual("7.0");
		expect(
			(new  Browser.Detector(ie7)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE7()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie7)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie7)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 8.0 on Windows Vista", function() {
		var ie8 = "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)";
		expect(
			(new  Browser.Detector(ie8)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie8)).getVersion()
		).toEqual("8.0");
		expect(
			(new  Browser.Detector(ie8)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE8()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie8)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 8.0 on Windows 7", function() {
		var ie8 = "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)";
		expect(
			(new  Browser.Detector(ie8)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie8)).getVersion()
		).toEqual("8.0");
		expect(
			(new  Browser.Detector(ie8)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE8()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie8)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 8.0 on Windows 8", function() {
		var ie8 = "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.2; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)";
		expect(
			(new  Browser.Detector(ie8)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie8)).getVersion()
		).toEqual("8.0");
		expect(
			(new  Browser.Detector(ie8)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE8()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie8)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie8)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 9.0 on Windows Vista", function() {
		var ie9 = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/4.0; GTB7.4; InfoPath.3; SV1; .NET CLR 3.1.76908; WOW64; en-US)";
		expect(
			(new  Browser.Detector(ie9)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie9)).getVersion()
		).toEqual("9.0");
		expect(
			(new  Browser.Detector(ie9)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE9()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie9)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 9.0 on Windows 7", function() {
		var ie9 = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; FunWebProducts)";
		expect(
			(new  Browser.Detector(ie9)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie9)).getVersion()
		).toEqual("9.0");
		expect(
			(new  Browser.Detector(ie9)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE9()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie9)).isIE10()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE()
		).toBe(true);
	});

	it("His Browser is Internet Explorer 10.0 on Windows 7", function() {
		var ie9 = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)";
		expect(
			(new  Browser.Detector(ie9)).getBrowser()
		).toEqual("msie");
		expect(
			(new  Browser.Detector(ie9)).getVersion()
		).toEqual("10.0");
		expect(
			(new  Browser.Detector(ie9)).isIE6()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE7()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE8()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE9()
		).toBe(false);
		expect(
			(new  Browser.Detector(ie9)).isIE10()
		).toBe(true);
		expect(
			(new  Browser.Detector(ie9)).isIE()
		).toBe(true);
	});
});

