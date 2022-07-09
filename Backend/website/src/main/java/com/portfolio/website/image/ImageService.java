package com.portfolio.website.image;

import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService {

    private ResourcePatternResolver resourcePatResolver = new PathMatchingResourcePatternResolver();

    private List<File> getAllImagesInFolder(String folderName) throws IOException {
        Resource[] allResources = resourcePatResolver.getResources("classpath:images/"+folderName+"/*.jpg");
        List<File> resourceList = new ArrayList<File>();
        for(Resource res : allResources){
            resourceList.add(res.getFile());
        }
        return resourceList;
    }

    public List<File> getRandomImageFolder() throws IOException {
        int randomNumber = (int) (Math.random() * 5) + 1;
        List<File> files = getAllImagesInFolder("image"+randomNumber);
        return files;
    }

}
