<?php

use PHPUnit\Framework\TestCase;
include_once __DIR__."/../index.php";

/**
 * @covers ___________
 */
final class IndexTest extends TestCase {
    public function testInc(){
        // $output = lookup(array("testing" => true));
        inc("_header", null);
        // // print_r($output);
        // $this->assertEquals(, true);
    }

    // public function testGuestLookup(){
    //     $record = lookupGuest(array(
    //         "testing"     => true,
    //         "invite_code" => "BEAR",
    //         "zip_code" => "90034"
    //     ));
    //     // print_r(json_decode($record, true));
    //     $r = json_decode($record, true);
    //     $this->assertEquals($r["record"]["name"], "Guesty McGuestface");
    //     $this->assertEquals($r["record"]["size"], 1);
    // }

}