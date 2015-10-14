import {assert} from 'chai';
import {CaesarCipher, SimpleSubstitutionCipher} from '../target/cipher';

describe("Q4", () => {

  it("test1", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.encrypt("hello world!");
    assert.equal(ret , "mjqqt btwqi!");
  });

  it("test2", () => {
    const cipher = new CaesarCipher(5);
    var ret = cipher.decrypt("mjqqt btwqi!");
    assert.equal(ret , "hello world!");
  });

  it("test3", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.encrypt("hello world!");
    assert.equal(ret , "hello world!");
  });

  it("test4", () => {
    const cipher = new CaesarCipher(26);
    var ret = cipher.decrypt("hello world!");
    assert.equal(ret , "hello world!");
  });
});

describe("Q5", () => {

  it("test1", () => {
    const cipher = new SimpleSubstitutionCipher();
    var ret = cipher.encrypt("hello world!");
    assert.equal(ret , "daiil vloir!");
  });

  it("test2", () => {
    const cipher = new SimpleSubstitutionCipher();
    var ret = cipher.decrypt("daiil vloir!");
    assert.equal(ret , "hello world!");
  });
});

