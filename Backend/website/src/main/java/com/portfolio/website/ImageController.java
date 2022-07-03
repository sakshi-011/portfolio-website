package com.portfolio.website;

import com.portfolio.website.image.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class ImageController {

    @Autowired
    ImageService service;

    @ResponseBody
    @GetMapping(value = "/api/random/img",produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<List<Resource>> getImages() throws IOException {
        List<Resource> res = service.getAllImagesInFolder();
        return ResponseEntity.ok(res);
    }
}
