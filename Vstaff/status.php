<?php $pageName="status"; require_once("inc/header.php"); ?>

  <div class="status">
    <div class="content">
      <div class="row invisible" data-toggle="appear">

        <!-- يرجى العلم بأنه من الواجب ترتيب هذا من الأعلى للأصغر، شكراً عمر -->
        <?php

        $all = $conn->query("SELECT Candidates.name,Candidates.num,Candidates.img,Candidates.des,Candidates.job, votes.cid
FROM Candidates
INNER JOIN votes ON Candidates.num=votes.cid GROUP BY Candidates.num ORDER BY COUNT(*) DESC;
 ")->fetchAll();
        foreach($all as $al){
          $Aname = htmlspecialchars($al['name']);
          $Anum = (int)$al['num'];
          $Aimg = htmlspecialchars($al['img']);
          $Ades = htmlspecialchars($al['des']);
          $Ajob = htmlspecialchars($al['job']);
          $total = current($conn->query("SELECT count(*) FROM votes WHERE cid={$Anum}")->fetch());

         ?>
        <div class="col-6 col-xl-3">
            <a class="block block-link-shadow text-right" href="javascript:void(0)">
                <div class="block-content block-content-full clearfix">
                    <div class="float-left mt-10 d-none d-sm-block">
                        <img src="<?=$Aimg?>" width="50%" alt="User">
                    </div>
                    <div class="font-size-h3 font-w600" data-toggle="countTo" data-speed="1000" data-to="<?=$total?>">
                      <?=$total?>
                    </div>
                    <div class="font-size-sm font-w600 text-uppercase text-muted"><?=$Aname?> - <?=$Anum?></div>
                </div>
            </a>
        </div>
      <?php } ?>
    </div>
    </div>
  </div>

<?php require_once("inc/footer.php"); ?>
