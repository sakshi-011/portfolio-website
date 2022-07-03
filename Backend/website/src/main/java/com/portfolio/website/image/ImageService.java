package com.portfolio.website.image;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService {

    private ResourceLoader resourceLoader = new DefaultResourceLoader();
    private ResourcePatternResolver resourcePatResolver = new PathMatchingResourcePatternResolver();

    public List<Resource> getAllImagesInFolder() throws IOException {
        Resource[] allResources = resourcePatResolver.getResources("classpath:images/image2/*.jpg");
        List<Resource> resourceList = new ArrayList<Resource>();
        for(Resource res : allResources){
            resourceList.add(res);
        }
        return resourceList;
    }

}
