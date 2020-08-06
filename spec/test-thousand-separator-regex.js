describe("thousandSeparator_regex", function() {
    describe ("#thousandSeparator_regex", function() {
      it("'4'を返す", function() {
        expect( thousandSeparator(4) ).toEqual('4');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("32を与えたとき、'32'を返す", function() {
        expect( thousandSeparator(32) ).toEqual('32');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("256を与えたとき、'256'を返す", function() {
        expect( thousandSeparator(256) ).toEqual('256');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("4048を与えたとき、'4,048'を返す", function() {
        expect( thousandSeparator(4048) ).toEqual('4,048');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("32384を与えたとき、'32,384'を返す", function() {
        expect( thousandSeparator(32384) ).toEqual('32,384');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("259072を与えたとき、'259,072'を返す", function() {
        expect( thousandSeparator(259072) ).toEqual('259,072');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("2072576を与えたとき、'2,072,576'を返す", function() {
        expect( thousandSeparator(2072576) ).toEqual('2,072,576');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("16580608を与えたとき、'16,580,608'を返す", function() {
        expect( thousandSeparator(16580608) ).toEqual('16,580,608');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("132644864を与えたとき、'132,644,864'を返す", function() {
        expect( thousandSeparator(132644864) ).toEqual('132,644,864');
      });
    });
  
    describe ("#thousandSeparator_regex", function() {
      it("1061158912を与えたとき、'1,061,158,912'を返す", function() {
        expect( thousandSeparator(1061158912) ).toEqual('1,061,158,912');
      });
    });
  });
  